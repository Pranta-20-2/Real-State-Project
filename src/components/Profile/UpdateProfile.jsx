import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const { user, updateUserProfile, loading, setReload } = useAuth();

    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const newName = e.target.name.value;
        const newImage = e.target.image.value;

        updateUserProfile(newName, newImage)
            .then(() => {
                toast.success("Profile updated successfully")
                setReload(Date.now())

            })
            .catch((error) => {
                toast.error("Error updating profile: ", error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Round City | Update Profile</title>
            </Helmet>
            {loading || user && (
                <div>
                    <h2 className=" mt-10 text-center text-5xl font-semibold underline">Update Profile:</h2>
                    {user && (
                        <div className="flex justify-center mt-10">

                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleProfileUpdate} className="card-body">
                                    <div className="form-control" data-aos="fade-right">
                                        <label className="label">
                                            <span className="label-text text-xl">Your Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required  />
                                    </div>
                                    <div className="form-control" data-aos="fade-left">
                                        <label className="label">
                                            <span className="label-text text-xl">Your Image link</span>
                                        </label>
                                        <input type="text" name="image" placeholder="Your Image" className="input input-bordered" />
                                    </div>

                                    <div className="form-control mt-6">

                                        <button className="btn animate__animated animate__pulse animate__infinite font-semibold border-2 px-5 py-2 bg-blue-300 rounded-lg hover:bg-green-300 text-center">Update Profile</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UpdateProfile;
