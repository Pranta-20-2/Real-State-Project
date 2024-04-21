import { useLoaderData } from "react-router-dom";
import StateCard from "./StateCard";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const RealStateData = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Round City | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <div className=" mb-10">
                <p className=" text-center my-10 text-5xl font-bold animate__animated animate__bounce animate__slow">Our Services</p>
                <div>
                    <p className=" text-center my-10 text-xl border-y-4 border-dashed p-6 max-w-[600px] mx-auto" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Find Your Perfect Property: Explore a Diverse Range of Homes, Apartments, and Investment Opportunities. Your Journey to Homeownership Starts Here!</p>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-10 delay-50 '} >
                {
                    RealStateData.map(stateCard => <StateCard key={stateCard.id} stateCard={stateCard}></StateCard>)

                }
            </div>


        </div>

    );
};

export default Home;