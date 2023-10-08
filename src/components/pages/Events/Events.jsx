import { useLoaderData } from "react-router-dom";


const Events = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div>
            <h2 className="text-3xl">Events are coming soon... </h2>
        </div>
    );
};

export default Events;