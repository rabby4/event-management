import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoArrowUndoOutline } from 'react-icons/io5';
import { FaUserCog } from 'react-icons/fa';
import Navbar from "../../shared/Navbar/Navbar";

const Event = () => {
    const events = useLoaderData()
    const { id } = useParams()
    const event = events?.find(event => event.id === id)

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <div className="my-20">
                    <Link to='/events'><button className="flex items-center gap-2 text-lg font-semibold hover:text-red-600"><IoArrowUndoOutline></IoArrowUndoOutline>All Events</button></Link>
                </div>
                <div>
                    <div>
                        <h2 className="text-6xl font-bold italic">{event.title}</h2>
                        <div className="flex justify-between items-center my-8">
                            <p>{event.stDate} - {event.endDate}</p>
                            <button className="btn bg-red-700 text-white font-semibold hover:bg-red-600 px-8">Buy Ticket</button>
                        </div>
                    </div>
                    <div className="max-w-5xl">
                        <img className="w-full h-[550px]" src={event.img} alt="" />

                    </div>
                    <div className="my-10">
                        <p>{event.description}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold">Event Details:</h2>
                    </div>
                    <div className="grid grid-cols-4 my-10">
                        <div>
                            <h2 className="font-bold text-base">Start</h2>
                            <p>{event.stDate}</p>
                            <div className="my-5">
                                <h2 className="font-bold text-base">End</h2>
                                <p>{event.endDate}</p>
                            </div>
                            <h2 className="font-bold text-base">Ticket Price</h2>
                            <p>${event.price}</p>
                        </div>
                        <div>

                            <div className="my-5">
                                <h2 className="font-bold text-base">Phone</h2>
                                <p>{event.phone}</p>
                            </div>
                            <h2 className="font-bold text-base">Email</h2>
                            <p>{event.email}</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-base">Venue</h2>
                            <p>Motion Theater</p>
                            <p>{event.location}</p>
                        </div>
                        <div className="p-8 shadow-lg">
                            <h2 className="flex items-center gap-3 font-bold text-xl bg-red-600 p-3 rounded text-white"><FaUserCog></FaUserCog> Event Organized By</h2>
                            <img src={event.orgImg} alt="" className="my-5 rounded" />
                            <p className="text-center text-xl font-bold">{event.orgName}</p>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <h2 className="text-3xl font-semibold">Sponsors:</h2>
                    <div className="grid grid-cols-4 items-center justify-items-start my-5 sponsorImg">
                        {
                            event.spnsrImg.map((img, indx) => <img key={indx} className="" src={img} alt="" />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Event;