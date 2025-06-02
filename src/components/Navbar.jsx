import React, { forwardRef, useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png';
import foodVideo from "../assets/videos/food.mp4";
import { recipecontext } from '../context/RecipeContext';
import gsap from 'gsap';

const Navbar = ({ menuRef }) => {
    const { isMenuActive, setIsMenuActive } = useContext(recipecontext);

    const menuHandler = () => {
        console.log(menuRef.current);
        gsap.to(menuRef.current, {
            translateX: isMenuActive ? '0%' : '100%'
        })
    }

    return (
        <div className='relative bg-orange-100 flex items-center justify-between px-[2rem] py-[0.7rem] md:py-[0.5rem]'>
            <img className='h-[3.8rem] md:h-[3rem] invert-color' src={logo} alt="food case" />

            <div className='hidden absolute left-[50%] -translate-x-1/2 text-[1.1rem] md:flex items-center justify-center gap-[2rem]'>
                <NavLink to={'/'} style={({ isActive }) => ({ color: isActive ? '#fb5607' : 'inherit' })} className={'flex items-center gap-[0.5rem] font-[500]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>

                    <span>
                        Explore
                    </span>
                </NavLink>
                <NavLink to={'/create_recipes'} style={({ isActive }) => ({ color: isActive ? '#fb5607' : 'inherit' })} className={'flex items-center gap-[0.5rem] font-[500]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    <span>
                        Create
                    </span>
                </NavLink>
                <NavLink to={'/favourite_recipes'} style={({ isActive }) => ({ color: isActive ? '#fb5607' : 'inherit' })} className={'flex items-center gap-[0.5rem] font-[500]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.2rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>


                    <span>
                        Favourites
                    </span>
                </NavLink>
            </div>

            {!isMenuActive ? <svg onClick={() => { setIsMenuActive(prev => !prev) }} className="menu-btn z-[9999999] md:hidden size-[3rem]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> :

            <svg onClick={() => { setIsMenuActive(prev => !prev) }} className="menu-btn z-[9999999] md:hidden size-[3rem]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            }

            <div className='hidden md:block h-[3rem] w-[8rem]'>
                <video className='h-full w-full object-cover object-center rounded-full' muted autoPlay loop src={foodVideo}></video>
            </div>

        </div>
    )
};

export default Navbar