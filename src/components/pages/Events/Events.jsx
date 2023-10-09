import { BsArrowRight } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";


const Events = () => {
    const events = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto my-24 px-10">
                <div>
                    <h5 className="text-red-600 text-center lg:text-3xl md:text-2xl text-xl font-semibold mb-4">Event</h5>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl text-center font-bold mb-16 uppercase italic">Upcoming events</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {
                        events.map(event => <div key={event.id}>
                            <div className="card card-compact bg-base-100 border border-gray-100">
                                <figure><img className="h-60" src={event.img} alt="" /></figure>
                                <div className="card-body">
                                    <div className="flex gap-5">
                                        <div>
                                            <p className="text-sm uppercase">{event.day}</p>
                                            <h2 className="text-3xl font-bold text-red-600">{event.stDate.split(" ")[1].slice(0, 2)}</h2>
                                        </div>
                                        <div>
                                            <p>{event.stDate} - {event.endDate}</p>
                                            <h2 className="md:text-2xl text-xl font-bold my-2">{event.title}</h2>
                                            <p>{event.description.slice(0, 220)}...</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-5">
                                        <h2 className="text-lg font-bold">Cost: ${event.price}</h2>
                                        <Link to={`/event/${event.id}`}><button className="text-base flex items-center gap-2 font-semibold hover:text-red-600">View Details <BsArrowRight></BsArrowRight></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Events;