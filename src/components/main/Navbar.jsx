import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import OSULogo from "../../data/images/main/footer/osu.png"
import SHPELogo from "../../data/images/main/footer/shpe.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
    /* Hamburger and "X" click for mobile menu */
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    function allOnClick() {
        setNav(false);
        scrollToTop();
    }

    return (
        /* Navbar Container */
        <div name="Navigation Bar" className='sticky top-[0] z-10 bg-white flex justify-between items-center w-full h-[100px] shadow-md'>

            <Link name="Logo" className='cursor-pointer p-2 flex justify-center items-center h-[90px] hover:scale-105 duration-500' to='/' onClick={allOnClick}>
                <img src={SHPELogo} alt="SHPE-logo" className='h-[60px]'/>
                <p className='p-2 text-[30px] scale-y-150'>|</p>
                <img src={OSULogo} alt="OSU-logo" className='h-[60px]'/>
            </Link>

            {/* Menu for Navigation Bar */}
            <ul className='hidden min-[1310px]:flex text-[19px]'>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105'><Link onClick={scrollToTop} to='/'> HOME</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105'><Link onClick={scrollToTop} to='/about'>ABOUT US</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105'><Link onClick={scrollToTop} to='/event'>EVENTS</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105'><Link onClick={scrollToTop} to='/officers'>OFFICERS</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105'><Link onClick={scrollToTop} to='/calendar'>CALENDAR</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105'><Link onClick={scrollToTop} to='/shpetinas'>SHPETINAS</Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='mr-4 min-[1310px]:hidden z-10 cursor-pointer duration-300 hover:text-[#ED5D29] hover:scale-125'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            {/* Mobile Menu  */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen min-[1310px]:hidden flex flex-col justify-center items-center text-4xl bg-white text-black'}>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105 py-6'><Link to='/' onClick={allOnClick}> HOME</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105 py-6'><Link to='/about' onClick={allOnClick}>ABOUT US</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105 py-6'><Link to='/event' onClick={allOnClick}>EVENTS</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105 py-6'><Link to='/officers' onClick={allOnClick}>OFFICERS</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105 py-6'><Link to='/calendar' onClick={allOnClick}>CALENDAR</Link></li>
                <li className='duration-300 hover:text-[#ED5D29] hover:scale-105 py-6'><Link to='/shpetinas' onClick={allOnClick}>SHPETINAS</Link></li>
            </ul>
        </div>
    )
}

export default Navbar