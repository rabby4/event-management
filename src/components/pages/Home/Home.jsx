import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import Navbar from "../../shared/Navbar/Navbar";


const Home = () => {
    const events = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[850px]" style={{ backgroundImage: 'url(https://i.ibb.co/42cr9tH/8-1.jpg)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl">
                        <h1 className="mb-5 text-4xl font-normal uppercase tracking-[15px]">Main Party of this autumn</h1>
                        <h1 className="mb-5 text-8xl font-bold uppercase tracking-[20px]">Light your night</h1>
                        <h1 className="mb-5 text-4xl font-semibold uppercase tracking-[5px]">21 october 2023</h1>
                        <button className="btn mr-5 rounded-none bg-transparent text-white hover:text-black px-7">More Info</button>
                        <button className="btn ml-5 rounded-none bg-transparent text-white hover:text-black px-7">Buy Tickets</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/BwfSSQG/1.jpg)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl text-black font-semibold italic">Welcome to <br /> The Motion Theater</h1>
                        <p className="mb-5 text-black">When thou shalt be disposed to set me light
                            And place my merit in the eye of scorn,Upon thy side against myself I’ll fight And prove thee virtuous, though thou art forsworn.With mine own weakness being best acquainted,Upon thy part I can set down a story Of faults conceal’d, wherein I am attainted, That thou in losing me shalt win much glory. </p>
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co/phB11RN/49810-FA27-FDC0-C89938128-C27-B69-E287-BBB00-BE1-FE37-C7-C229pimgpsh-fullsize-distr.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mb-24">
                <div>
                    <h5 className="text-red-600 text-center text-3xl font-semibold mb-4">Event</h5>
                    <h2 className="text-5xl text-center font-bold mb-16 uppercase italic">Upcoming events</h2>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {
                        events.map(event => <div key={event.id}>
                            <div className="card card-compact border border-gray-200">
                                <figure><img className="h-60" src={event.img} alt="" /></figure>
                                <div className="card-body">
                                    <div className="flex gap-5">
                                        <div>
                                            <p className="text-sm uppercase">{event.day}</p>
                                            <h2 className="text-3xl font-bold text-red-600">{event.stDate.split(" ")[1].slice(0, 2)}</h2>
                                        </div>
                                        <div>
                                            <p>{event.stDate} - {event.endDate}</p>
                                            <h2 className="text-2xl font-bold my-2">{event.title}</h2>
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
            <div>
                <div className="max-w-7xl mx-auto my-24">
                    <div>
                        <h5 className="text-red-600 text-center text-3xl font-semibold mb-4">Sponsor</h5>
                        <h2 className="text-5xl text-center font-bold mb-16 uppercase italic">OFFICIAL SPONSOR</h2>

                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center sponsorImg">
                        <img className="" src="https://i.ibb.co/7JFmghx/sponsor1.png" alt="" />
                        <img className="" src="https://i.ibb.co/RSLYp4v/sponsor2.png" alt="" />
                        <img className="" src="https://i.ibb.co/N96wY3w/sponsor3.png" alt="" />
                        <img className="" src="https://i.ibb.co/BKK9vb3/sponsor4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;