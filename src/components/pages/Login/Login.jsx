import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="max-w-7xl h-[700px] flex items-center mx-auto">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-xl mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
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
                        <button className="btn bg-red-700 hover:bg-red-600 text-white text-base">Login</button>
                    </div>
                </form>
                <div>
                    <p className='text-sm text-center mb-5'>Do not have an account? Please <Link to='/register'><strong className='text-red-600'>Register</strong></Link></p>
                </div>
                <div className="px-10 mb-10">
                    <button className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-red-600 hover:border-red-600 duration-300'>
                        <FaGoogle></FaGoogle>
                        <span>Login with Google</span>
                    </button>
                    <button className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-red-600 hover:border-red-600 duration-300'>
                        <FaGithub></FaGithub>
                        <span>Login with Github</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;