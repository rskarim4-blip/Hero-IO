import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png";
const Navbar = () => {

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-violet-600 font-semibold" : ""
                }>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/apps" className={({ isActive }) =>
                    isActive ? "text-violet-600 font-semibold" : ""
                }>
                    Apps
                </NavLink>
            </li>

            <li>
                <NavLink to="/installation" className={({ isActive }) =>
                    isActive ? "text-violet-600 font-semibold" : ""
                }>
                    Installation
                </NavLink>
            </li>
        </>
    );


    return (
        <div className="sticky top-0 z-50 shadow-sm navbar bg-base-100 px-4 md:px-8">

            {/* LEFT */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-1">
                    <img src={logo} width={40} height={40} alt="" />
                    <span className="text-violet-600 font-semibold">HERO.IO</span>
                </Link>
            </div>

            {/* ✅ CENTER MENU */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
                    {navLinks}
                </ul>
            </div>

            {/* RIGHT BUTTON */}
            <div className="navbar-end">
                <a
                    href=""
                    target="_blank"
                    className="btn bg-linear-to-br from-violet-800 to-violet-400 text-white"
                >
                    <img className='mt-1 w-5 h-5 mr-1' src="https://i.ibb.co.com/SXYyyz3P/Vector-4.png" alt="plus icon" />
                    Contribute
                </a>
            </div>

        </div>
    );
};

export default Navbar;
