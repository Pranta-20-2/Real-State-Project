import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";
const LogIn = () => {
    // navigate
    const navigate =useNavigate()
    const location = useLocation();

    const [showPass, setShowPass] = useState(false)
    const { signInUser} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        
        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            if(result.user){
                navigate(location?.state || '/')
            }
            toast.success("Login Successful")
        })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (

        <div className="mt-10 flex flex-col items-center">
            <Helmet>
                <title>Round City | LogIn</title>
            </Helmet>
            <div>
                <h2 className=" text-5xl font-bold mb-5">LogIn Now...</h2>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <p className=" text-red-500">Email is Required</p>}

                    </div>


                    <div className=" relative" data-aos="fade-left" >
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <p className=" text-red-500">Password is Required</p>}

                        </div>
                        <span onClick={() => setShowPass(!showPass)} className=" absolute top-12 right-4 text-lg" >
                            {
                                showPass ? <FaEye></FaEye> : <IoEyeOffSharp></IoEyeOffSharp>
                            }
                        </span>
                    </div>

                    <div className="form-control mt-6 animate__animated animate__pulse animate__infinite">
                        <button type="submit" className="btn btn-primary hover:bg-green-400 text-white">LogIn </button>
                    </div>
                </form>
                <p className="text-center mb-5">Do not have an account? Please <span className="font-semibold text-blue-400 underline"><Link to='/register'>Register</Link></span></p>
                
                <p className=" text-center">Login With -</p>
                <div className="form-control mx-4 mb-10">
                    <SocialLogin></SocialLogin>
                   
                </div>
            </div>

        </div>
    );
};

export default LogIn;