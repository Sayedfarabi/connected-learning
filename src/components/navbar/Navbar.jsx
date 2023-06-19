import React from 'react';
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <section className='w-10/12 md:w-4/5 lg:w-3/4 mx-auto'>
            <div className="navbar py-4 md:py-6 lg:py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <div className='my-4'>
                                <Link to={"/"}>
                                    <img src={logo} className='w-[92px] h-[24px] md:w-[138px] md:h-[36px] lg:w-[184px] lg:h-[48px]' alt="logo" />
                                </Link>
                            </div>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/course"}>Course</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to={"/"} className="hidden lg:inline-block">
                        <img src={logo} className='w-[92px] h-[24px] md:w-[138px] md:h-[36px] lg:w-[184px] lg:h-[48px]' alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/course"}>Course</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/"}>
                        <button className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 border border-primary text-primary rounded-full font-semibold hover:text-[#ECEEF5] hover:bg-primary mx-4 md:mx-6">Log in</button></Link>
                    <Link to={"/"}>
                        <button className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 border border-primary text-primary rounded-full font-semibold hover:text-[#ECEEF5] hover:bg-primary">Sign up</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Navbar;