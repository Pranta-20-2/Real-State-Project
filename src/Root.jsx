import { Outlet } from "react-router-dom";
import NavBar from "./components/Home/Header/NavBar";
import Footer from "./components/Home/Footer/Footer";
import { RiseLoader } from "react-spinners";
import { useEffect, useState } from "react";
const Root = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const controlTimeout = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(controlTimeout);
    }, []);

    if (showLoading) {
        return (
            <div className=" text-center flex flex-col max-h-screen items-center h-[512px]  justify-center ">

                <RiseLoader color="#42A5F5" />
            </div>
        );
    }
    return (
        <div className="font-poppins">
            <div className=" max-w-7xl mx-auto mb-10">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;