import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Register = () => {
    // navigate
    const navigate = useNavigate()

    const [registerError, setRegisterError] = useState('');
    const [showPass, setShowPass] = useState(false)
    const { createUser, updateUserProfile } = useAuth() // custom hook which call AuthContext
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { email, password, fullName, image } = data;
        createUser(email, password)
            .then(() => {
                toast.success("Register Successful")
                updateUserProfile(fullName, image)
                    .then(() => {
                        navigate('/')
                    })
            })
            .catch(error => {
                toast.error(error.message)

            })

        if (password.length < 6) {
            setRegisterError('Password Should be at least 6 characters or longer')
            toast.error(registerError)
            return
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter')
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one Uppercase letter ')
            return
        }

    }



    return (
        <div className="mt-10 flex flex-col items-center">
            <Helmet>
                <title>Round City | Register</title>
            </Helmet>
            <div>
                <h2 className="text-5xl font-bold mb-5">Register Now...</h2>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full name" className="input input-bordered" {...register("fullName", { required: true })} />
                        {errors.fullName && <p className=" text-red-500">Full name is Required</p>}

                    </div>

                    <div className="form-control" data-aos="fade-left">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <p className=" text-red-500">Email is Required</p>}

                    </div>

                    <div className="form-control" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Image Url" className="input input-bordered" {...register("image")} />
                    </div>

                    <div className=" relative" data-aos="fade-left">
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
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="terms" {...register("terms", { required: true })} />

                        <label htmlFor="terms">Accept our <a className=" text-blue-400 underline" href="">terms and condition</a></label>
                    </div>
                    {errors.terms && <p className=" text-red-500">Checked terms and condition</p>}

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary hover:bg-green-400 text-white">Register</button>
                    </div>
                </form>


                <p className="text-center mb-5">Already have an account? Please <span className="font-semibold text-blue-400 underline"><Link to='/login'>LogIn</Link></span></p>
            </div>


        </div>
    );
};

export default Register;
