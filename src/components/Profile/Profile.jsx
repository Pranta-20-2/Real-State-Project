import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
const Profile = () => {
    const { user, loading } = useAuth();

    return (
        <div>
            <Helmet>
                <title>Round City| Profile</title>
            </Helmet>

            {loading || user && (
                <div className="space-y-4 mx-auto">

                    <h2 className="text-center text-5xl font-bold my-10">Welcome {`"${user.displayName}"`} </h2>
                    <div className="flex flex-col mx-auto gap-4 w-[500px]  animate__animated animate__flip">
                        <div className="skeleton w-full">
                            <p><img className=" w-full h-full rounded-full" src={user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocIiDN4UKH9JbBA2f7B7LaPpB_uCP8tLxs0SqT2M8W1MSAk4kMOX=s96-c"} alt="" />
                            </p>
                        </div>
                        <div className="skeleton  w-full p-5">
                            <p className=" text-2xl font-semibold">Your Name: {user.displayName}</p>
                        </div>
                        <div className="skeleton w-full p-5">
                            <p className=" text-2xl font-semibold">Your Email: {user.email}</p>
                        </div>
                        <div className="animate__animated animate__pulse animate__infinite flex flex-col justify-items-end">
                        <Link to={`/updateProfile`} className="font-semibold border-2 px-5 py-2 bg-blue-300 rounded-lg hover:bg-orange-300 text-center text-black">
                            <button >Update your profile</button>
                        </Link>
                    </div>
                    </div>
                    



                </div>
            )}
        </div>
    );
};

export default Profile;
