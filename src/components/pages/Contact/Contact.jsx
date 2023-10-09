
import Navbar from "../../shared/Navbar/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto py-24">
                <div className="mb-10">
                    <h2 className="text-center text-5xl italic font-bold">Contact with Us</h2>
                </div>
                <div className="flex gap-20 items-center">
                    <div className="w-1/2">
                        <div className="card flex-shrink-0 w-full shadow-xl mx-auto">
                            <form className="card-body">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text font-medium">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                                </div>

                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                                </div>

                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text font-medium">Phone</span>
                                    </label>
                                    <input type="text" placeholder="Your Phone" name='phone' className="input input-bordered" required />
                                </div>

                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text font-medium">Photo URL</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="What's on your mind..."></textarea>
                                </div>

                                <div className="form-control">
                                    <button className="btn bg-red-700 hover:bg-red-600 text-white text-base">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/47HSNqc/c-location.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl font-semibold">Brooklyn, NY 10036, United States</h2>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/rcb5JGR/c-phone.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl font-semibold">+8801630474756</h2>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/gyFsy1N/c-massege.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl font-semibold">mdrabbybd@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;