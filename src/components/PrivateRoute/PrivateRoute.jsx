import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState, useEffect } from "react";
import { RiseLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
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

                <RiseLoader color=" #42A5F5" />
            </div>
        );
    }


    if ( !user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />;
    }

    return children;
};

export default PrivateRoute;
