import { IoLocationOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveStates } from "../../../utils/LocalStorage";
import { Helmet } from "react-helmet-async";


const CardDetails = () => {
    const states = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const state = states.find(state => state.id === intId)
    const { image, estate_title, description, facilities, location, area, price, segment_name, status, nearby_attractions } = state
    const handleCart= state =>{
        
        saveStates(state)
        console.log(state);
    }
    return (
        <div>
            <Helmet>
                <title>Round City | View Card</title>
            </Helmet>
            <div className="border-y-4 border-dashed my-10 w-[350px] mx-auto  items-center">
                <p className="text-3xl font-semibold py-10 text-center animate__animated animate__lightSpeedInRight">State Details Of ID: {id} </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                <div className=" md:col-span-3 space-y-5 p-5 rounded-2xl shadow-xl border-2">
                    <p className=" text-5xl font-bold animate__animated animate__lightSpeedInLeft">{estate_title}</p>
                    <img className="w-full h-[350px] md:h-[550px] rounded-xl animate__animated animate__backInLeft" src={image} alt="" />
                    <div className=" text-xl space-y-5"data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                        <p><span className=" font-semibold">Segment Name: </span>{segment_name}</p>
                        <p className=" text-xl"><span className=" font-semibold">Facilities: </span>
                            {
                                facilities.map((facility, index) => <li key={index}>{facility}</li>)
                            }
                        </p>

                        <p><span className=" font-semibold">Price: </span>{price}</p>
                        <div className=" grid grid-cols-2">
                            <div>
                                <p><span className=" font-semibold ">Area: </span>{area}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoLocationOutline></IoLocationOutline>
                                <p><span className=" font-semibold ">Location: </span>{location}</p>
                            </div>
                        </div>
                        <p className=" text-xl"><span className=" font-semibold">Nearby Attraction Place: </span>
                            {
                                nearby_attractions.map((attraction, index) => <li key={index}>{attraction}</li>)
                            }
                        </p>

                    </div>
                </div>
                <div className=" md:col-span-2">
                    <div className=" bg-blue-200 rounded-lg p-5 space-y-5">
                        <p className="text-4xl font-semibold pb-3 pt-3 text-center border-b-2 border-red-500 w-[300px] mx-auto">State Details</p>
                        <p className="text-xl"><span className=" font-semibold underline">Status:</span> {status}</p>
                        <p className=" text-xl " data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"><span className=" font-semibold underline">Description</span> : {description}</p>
                    </div>
                    <div onClick={()=>handleCart(state)} className="my-5 animate__animated animate__pulse animate__infinite ">
                        <Link className="font-semibold border-2 px-5 py-3 bg-green-300 rounded-lg hover:bg-orange-300 flex justify-center items-center gap-3 text-3xl">
                            < FaCartShopping></FaCartShopping>
                            <button >Add To Cart</button>
                        </Link>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default CardDetails;