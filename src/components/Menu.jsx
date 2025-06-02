import React, { forwardRef, useContext, useRef } from 'react'
import { recipecontext } from '../context/RecipeContext'
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import foodVideo from "../assets/videos/food.mp4"

const Menu = forwardRef((props, ref) => {
  const { isMenuActive, setIsMenuActive } = useContext(recipecontext);

  return (
    <div ref={ref} className={`px-[2rem] fixed top-0 left-0 h-[100vh] transition-all duration-[0.4s] ease-[cubic-bezier(0, 0.55, 0.45, 1)] ${isMenuActive?'translate-x-[0%]':'translate-x-[100%]'} w-full z-[999] bg-orange-100`}>
      <div className='flex flex-col gap-[1rem]'>
        <NavLink to={'/'} style={({ isActive }) => ({ color: isActive ? '#fb5607' : 'inherit' })} className={'mt-[8rem] text-[2.1rem] flex items-center gap-[1.5rem] font-[400]'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[2.3rem] ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>

          <span>
            Explore
          </span>
        </NavLink>

        <NavLink to={'/create_recipes'} style={({ isActive }) => ({ color: isActive ? '#fb5607' : 'inherit' })} className={'text-[2.1rem] flex items-center gap-[1.5rem] font-[400]'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[2.3rem]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

          <span>
            Create
          </span>
        </NavLink>

        <NavLink to={'/favourite_recipes'} style={({ isActive }) => ({ color: isActive ? '#fb5607' : 'inherit' })} className={'text-[2.1rem] flex items-center gap-[1.5rem] font-[400]'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[2.3rem]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>


          <span>
            Favourites
          </span>
        </NavLink>
      </div>

      <video muted autoPlay loop className='rounded-lg h-[30rem] w-full object-cover object-center mt-[3rem]' src={foodVideo}></video>

    </div>
  )
});

export default Menu