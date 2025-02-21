import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";


const Home = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Home;