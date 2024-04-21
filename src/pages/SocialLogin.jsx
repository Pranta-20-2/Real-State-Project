import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SocialLogin = () => {
    const {googleLogin, gitLogin} = useAuth();
    //Navigation done
    const navigate =useNavigate()
    const location = useLocation();
    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(location?.state || '/')
            }
            toast.success("Login Successful")
        })
        .catch(error=>{
            console.error(error)
            toast.error(error.message)
        })
    }
    return (
        <div>
           
            <div>
                <div className=" text-center mt-5 flex items-center justify-center gap-4">
                    <button onClick={()=>{handleSocialLogin(googleLogin)}} className=" btn btn-circle btn-outline"><FaGoogle className=" text-2xl"></FaGoogle></button>
                    <button onClick={()=>{handleSocialLogin(gitLogin)}} className=" btn btn-circle btn-outline"><FaGithub className=" text-3xl"></FaGithub></button>
                </div>
            </div>
            
        </div>
    );
};

export default SocialLogin;