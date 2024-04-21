import { NavLink, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import 'animate.css';
import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
    const { logOut, user } = useAuth()
    useEffect(() => {
        AOS.init();
    }, [])
    const NavLinks =
        <>
            <li>
                <NavLink to={'/'}
                    className={({ isActive }) => isActive ?
                        'text-[18px] text-blue-400 font-semibold border-2 border-blue-500 '
                        : 'text-blue-400 text-[18px]'
                    }>Home
                </NavLink>
            </li>
            {
                user && <>
                    <li>
                        <NavLink to={'/profile'}
                            className={({ isActive }) => isActive ?
                                'text-[18px] text-blue-400 font-semibold border-2 border-blue-500'
                                : 'text-blue-400 text-[18px] '
                            }>Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/addCart'}
                            className={({ isActive }) => isActive ?
                                'text-[18px] text-blue-400 font-semibold border-2 border-blue-500'
                                : 'text-blue-400 text-[18px] '
                            }>View Cart
                        </NavLink>
                    </li>

                </>

            }
            <li>
                <NavLink to={'/about'}
                    className={({ isActive }) => isActive ?
                        'text-[18px] text-blue-400 font-semibold border-2 border-blue-500'
                        : 'text-blue-400 text-[18px] '
                    }>About Us
                </NavLink>
            </li>

        </>
    return (
        <div className="navbar mt-3 p-0 bg-[url('https://i.ibb.co/LZRmx8W/nav1.jpg')] rounded-xl md:px-5 py-3 " >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to="/" className="text-5xl font-bold p-0 m-0 "><span className=" text-blue-400">Round</span>City</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 animate__animated animate__pulse animate__infinite animate__delay-2s">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end flex flex-col md:flex-row items-end md:items-center md:gap-6">
                {
                    user ?
                        <div className="md:flex items-center gap-3">

                            <div className="tooltip tooltip-left" data-tip={
                                user?.displayName || "user not found"
                            }>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocIiDN4UKH9JbBA2f7B7LaPpB_uCP8tLxs0SqT2M8W1MSAk4kMOX=s96-c"} />
                                    </div>
                                </label>
                            </div>
                            <div className="animate__animated animate__pulse animate__infinite  ">
                                <NavLink onClick={logOut}
                                    className={({ isActive }) => isActive ?
                                        'text-[18px] text-blue-400 font-semibold border-2 border-blue-500 px-5 py-1 rounded-lg hover:bg-red-400'
                                        : 'text-blue-400 text-[18px] '
                                    }>Logout
                                </NavLink>
                            </div>



                        </div>
                        :
                        <>
                            <NavLink to={'/login'}
                                className={({ isActive }) => isActive ?
                                    'text-[18px] text-blue-400 font-semibold border-2 border-blue-500 px-5 py-1 rounded-lg animate__animated animate__pulse animate__infinite animate__delay-3s '
                                    : 'text-blue-400 text-[18px] '
                                }>LogIn
                            </NavLink>
                            <NavLink to={'/register'}
                                className={({ isActive }) => isActive ?
                                    'text-[18px] text-blue-400 font-semibold border-2 border-blue-500 px-5 py-1 rounded-lg animate__animated animate__pulse animate__infinite animate__delay-3s '
                                    : 'text-blue-400 text-[18px] '
                                }>Register
                            </NavLink>

                        </>

                }



            </div>
        </div>
    );
};

export default NavBar;
