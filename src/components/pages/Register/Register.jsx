import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../shared/Navbar/Navbar";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, photo, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Registration Successful!');
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => window.location.reload())
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-7xl h-screen flex items-center mx-auto">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-xl mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            <label className="label my-2">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-red-700 hover:bg-red-600 text-white text-base">Register</button>
                        </div>
                    </form>
                    <div>
                        <p className='text-sm text-center mb-5'>Do not have an account? Please <Link to='/login'><strong className='text-red-600'>login</strong></Link></p>
                    </div>

                </div>
                <Toaster></Toaster>
            </div>
        </>
    );
};

export default Register;