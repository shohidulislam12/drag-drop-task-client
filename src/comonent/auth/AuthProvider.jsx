import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,} from "firebase/auth";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser]=useState([])
  const provider = new GoogleAuthProvider();
const google=()=>{
    setLoading(true)
   return  signInWithPopup(auth, provider)
   
}
const logout=()=>{
    setLoading(true)
   signOut(auth).then(() => {
        toast('sucessfully logOut')
      }).catch((error) => {
        toast(error)
      });
      return 
}
 useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, async(currentuser) => {
    setLoading(true)
        if (currentuser?.email) {
     setUser(currentuser)
       //get token and store
       const useremail={email:currentuser?.email}
     axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`,useremail)
       .then(res=>{
        console.log('token',res)
        if( res.data.token){
         localStorage.setItem('token',res.data.token)
        }
       })
       //save data 
       const userdata={userEmail:user?.email,username:user.displayName,userphoto:user.photoURL}
       axios.post(`${import.meta.env.VITE_BASE_URL}/user`,userdata)
       .then(res=>console.log(res.data))


     } else {
       
       setUser(null);
       //remove token
       localStorage.removeItem('token')
     }
        setLoading(false)
      });
return ()=>unsubscribe()
},[user?.displayName])
console.log(user)
  const authinf = { google,user,logout,setUser,loading, setLoading  };
  return (
    <AuthContext.Provider value={authinf}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
