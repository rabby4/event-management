import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2'
import Navbar from "../../shared/Navbar/Navbar";

const Login = () => {
    const { user, logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log(user)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire(
                    'Good job!',
                    'Logged in successful!',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You entered wrong email and password!',
                })
            })

    }

    const googleLoginHandler = (e) => {
        e.preventDefault()
        logInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire(
                    'Good job!',
                    'Successfully login with Google',
                    'success'
                )
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                })
            })
    }

    const githubLoginHandler = (e) => {
        e.preventDefault()
        logInWithGithub()
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Good job!',
                    'Successfully login with Github',
                    'success'
                )
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                })
            })

    }

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-7xl h-[700px] flex items-center mx-auto lg:px-0 md:px-0 px-5">
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
                        <p className='text-sm text-center mb-5'>New in this website? Please <Link to='/register'><strong className='text-red-600'>Register</strong></Link></p>
                    </div>
                    <div className="px-10 mb-10">
                        <button onClick={googleLoginHandler} className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-red-600 hover:border-red-600 duration-300'>
                            <FaGoogle></FaGoogle>
                            <span>Login with Google</span>
                        </button>
                        <button onClick={githubLoginHandler} className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-red-600 hover:border-red-600 duration-300'>
                            <FaGithub></FaGithub>
                            <span>Login with Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;