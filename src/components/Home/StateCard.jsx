import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import 'animate.css';
import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const StateCard = ({ stateCard , deletable, handleDelete }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { id, image, estate_title, description, facilities, segment_name, location, price, status } = stateCard
    
    return (
        <div className=" bg-base-100 shadow-lg py-6 px-5 rounded-xl animate__animated animate__pulse animate__infinite animate__slower ">
            <Link to={`/state/${id}`}>
                <div className="space-y-3 relative">
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">

                        <figure><img className=" rounded-lg h-[290px]" src={image} alt="Shoes" /></figure>
                        <div className={`absolute top-2 right-2 px-3 py-2 rounded-lg ${status === 'Rent' ? ' bg-green-400' : status === 'Sale' ? ' bg-red-400' : ''} `}>for {status}
                        </div>
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className="mb-5 font-medium" >
                            {
                                description.length > 225
                                    ?
                                    <div>
                                        <p>{description.slice(0, 224)}...</p>

                                    </div>
                                    :
                                    <p>{description}</p>

                            }
                        </div>
                        <div>
                            <p> <span className=" font-semibold">Segment:</span> {segment_name}</p>
                        </div>
                        <div >
                            <p className=" font-semibold">Facilities-</p>

                            {
                                facilities.map((facility, index) => <li key={index}>{facility}</li>)
                            }


                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex items-center gap-1">
                                <IoLocationOutline></IoLocationOutline> {location}
                            </div>
                            <div>{price}</div>

                        </div>
                        <div className=" mt-10 flex flex-col justify-items-end" data-aos="zoom-out-up">
                            <Link to={`/state/${id}`} className="font-semibold border-2 px-5 py-2 bg-blue-300 rounded-lg hover:bg-orange-300 text-center">
                                <button >View details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Link>
            <div className="mt-5" data-aos="flip-up">
                {
                    deletable && (
                    <div onClick={() => handleDelete(id)}>
                        <button className="w-full btn bg-red-300"><MdDeleteForever className=" size-5 items-center"></MdDeleteForever>Delete From Cart</button>
                    </div>)
                }
                
            </div>
        </div >
    );
};

export default StateCard;