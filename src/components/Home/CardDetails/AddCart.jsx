import { useEffect, useState } from "react";
import { deleteStates, getStates } from "../../../utils/LocalStorage";
import StateCard from "../StateCard";
import { Helmet } from "react-helmet-async";

const AddCart = () => {
    const [states, setStates] = useState([])
    useEffect(() => {
        const storedStates = getStates()
        setStates(storedStates)
    }, [])

    const handleDelete = id => {
        deleteStates(id);
    }
    return (

        <div>
            <Helmet>
                <title>Round City | Cart Details</title>
            </Helmet>
            <h2 className=" text-center my-10 text-3xl font-semibold ">Cart Details</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 delay-50 mt-20 '>
                {
                    states.map(stateCard =>
                        <StateCard handleDelete={handleDelete} deletable={true} key={stateCard.id} stateCard={stateCard}>
                        </StateCard>)

                }

            </div>

        </div>
    );
};

export default AddCart;