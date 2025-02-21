import { useContext, useEffect, useState } from "react";
import { IoIosSunny, IoMdLogOut, IoMdMoon } from "react-icons/io";
import { AuthContext } from "./auth/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
    const {google,user,logout,setUser,loading}=useContext(AuthContext)
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );
if(loading){
    <span className="loading loading-spinner loading-lg"></span>
}
  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  const handlelogin=()=>{
   google()
   .then((result) => {
    const user = result.user;
 console.log(user)
  }).catch((error) => {
    console.log(error)
  });
  }
  const handleLogout=()=>{
    logout()
    setUser([])
  }
  return (
    <div className="navbar dark:bg-black  dark:text-[#eae9fc] bg-[#dedcff]">
      <div className="flex-1">
        <a className=" font-bold text-xl">Manage Task</a>
    
 
      </div>
      <div className="md:flex items-center   justify-around gap-3">

      {user?.displayName?
  <p className="justify-between md:flex  hidden ">Welcome {user?.displayName}</p>: <p className="md:flex  hidden  ">Welcome Guest </p>}
  {user?.displayName&& 
  <button className=" border p-1 flex items-center gap-2 px-2 text-sm rounded-xl border-gray-400 dark:text-white" onClick={handleLogout}>Logout <IoMdLogOut /></button>
 }
{!user?.displayName&&

<button className=" border p-1 flex items-center gap-2 px-2 text-sm rounded-xl border-gray-400 dark:text-white" onClick={handlelogin}> Login <span className=" text-blue-700 "><FaGoogle /></span></button>
}
<button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition"
    >
      {darkMode ?<IoIosSunny /> :<IoMdMoon />}
    </button>
      </div>
      <div className="flex-none">

        <div className="dropdown  dropdown-end">
      
          <div
            tabIndex={0}
            role="button"
            className="btn  btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
             
             {user?.photoURL?<img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
              />:<img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />} 
            </div>
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default Navbar;






