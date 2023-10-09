import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink
            to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
            Home
        </NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/events'>Events</NavLink></li>
    </>

    return (
        <div className="bg-black">
            <div className="navbar max-w-7xl mx-auto  py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-md bg-black text-white for-mobile font-medium dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/pxQLB1w/logo-1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-lg text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-14 rounded-full">
                                    {
                                        user && <img className="w-14 h-14 rounded-full" src={user.photoURL} alt="" />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}
                                        <span className="badge">New</span>
                                    </a>
                                </li>

                                <li><button className="font-semibold" onClick={handleSignOut} >Log Out</button></li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'><button className="btn px-8">Login</button></Link>
                    }
                    {/* {
                        user ? <div className="flex items-center gap-5">
                            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                            <h4 className='text-white font-medium'>{user.displayName}</h4>
                            <button onClick={handleSignOut} className="btn px-8">Log Out</button>
                        </div>
                            :
                            <Link to='/login'><button className="btn px-8">Login</button></Link>
                    } */}
                </div>
            </div>

            {/* 2nd nav bar */}
            {/* <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user && <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user.displayName}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><Link to='login'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;