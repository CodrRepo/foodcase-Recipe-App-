import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import ModifyDetails from './ModifyDetails';
import gsap from 'gsap';

const Details = () => {
  const { id } = useParams();
  const { rawData, currentRecipe, setRawData, setRecipeData, favouriteCount, setFavouriteCount, } = useContext(recipecontext);
  const navigate = useNavigate();
  let currentData = rawData.find(obj => obj.id === id);

  function toggleFavourites(e) {
    setRecipeData(prev => {
      return prev.map(element =>
        element.id === id ? { ...element, isFavourite: !element.isFavourite } : element
      )
    })

    setRawData(prev => {
      return prev.map(element =>
        element.id === id ? { ...element, isFavourite: !element.isFavourite } : element
      )
    })

    localStorage.setItem("data", JSON.stringify(rawData.map(element =>
        element.id === id ? { ...element, isFavourite: !element.isFavourite } : element
      )))

    setFavouriteCount(prev=>currentData.isFavourite?prev-1:prev+1);
  }

  function toggleLike(){
    setRecipeData(prev => {
      return prev.map(element =>
        element.id === id ? { ...element, likes: element.isLiked?element.likes-1:element.likes+1, isLiked: !element.isLiked } : element
      )
    })
    setRawData(prev => {
      return prev.map(element =>
        element.id === id ? { ...element, likes: element.isLiked?element.likes-1:element.likes+1, isLiked: !element.isLiked } : element
      )
    })

    localStorage.setItem("data", JSON.stringify(rawData.map(element =>
        element.id === id ? { ...element, likes: element.isLiked?element.likes-1:element.likes+1, isLiked: !element.isLiked } : element
      )))
  }


  function openUpdatePanel() {
    gsap.to(".update-panel", {
      x: '0%',
      opacity: 1,
      ease: 'power2.out',
      duration: 0.3,
    })
  }


  function deleteHandler() {
    setRecipeData(prev => prev.filter(element => element.id !== id))
    setRawData(prev => prev.filter(element => element.id !== id))
    localStorage.setItem("data", JSON.stringify(rawData.filter(element => element.id !== id)))
    currentData.isFavourite && setFavouriteCount(prev=>favouriteCount-1)
    navigate(-1);
  }
  console.log(currentData);



  return (
    <>
    {currentData && <div className='relative h-fit md:min-h-screen w-full p-[2rem] flex flex-row justify-center items-center'>
      {<ModifyDetails currentData={currentData} />}
      <div className='flex flex-col md:flex-row md:justify-center gap-[0rem] md:gap-[2rem]  w-full'>
        
        <svg onClick={() => { navigate(-1) }} className="size-[3.5rem] md:size-[2.2rem] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>

        <img className='w-full md:w-[20%] rounded-lg mt-[1.3rem] md:mt-[0rem] object-cover object-center' src={currentData.image} alt="" />

        <div className='relative w-full md:w-[30%] mt-[2rem] md:mt-[0rem]'>
          <h2 className='text-[2rem] md:text-[1.8rem]'>{currentData.title}</h2>
          <h2 className='mt-[0.2rem] md:mt-[0rem] text-[1.5rem] md:text-[1.3rem] leading-none text-[#fb5607]'>{currentData.chef}</h2>
          <div className='mt-[2rem] md:mt-[1rem] flex items-center gap-[0.5rem] md:gap-[0.3rem]'>
            <svg onClick={() => toggleLike()} className={`size-[2.5rem] md:size-[1.8rem] cursor-pointer select-none ${currentData.isLiked ? 'fill-red-500 stroke-none' : 'fill-white stroke-black'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

            <span className='inline-block text-[1.3rem] md:w-[1.5rem]'>{currentData.likes}</span>

            <svg onClick={() => toggleFavourites()} className={`size-[2.5rem] md:size-[1.8rem] cursor-pointer select-none ${currentData.isFavourite ? 'fill-[#fb5607] stroke-none' : 'fill-white stroke-black'} ml-[1rem] md:ml-[0.5rem]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
          </div>
          <h3 className='text-[1.5rem] md:text-[1rem] mt-[1.5rem] md:mt-[1rem]'><span className='text-[#fb5607] font-[500]'>Category: </span>{currentData.category}</h3>
          <p className='text-[1.5rem] leading-[2rem] md:text-[1rem] md:leading-[1.5rem] mt-[1rem] md:mt-[0.8rem]'>{currentData.instructions}</p>


          <div className='2xl:absolute bottom-[2rem] flex flex-wrap md:flex-nowrap gap-[0.8rem] mt-[3rem] text-[1.4rem] pb-[3rem] md:pb-[0rem] md:text-[1rem]'>
            <button onClick={openUpdatePanel} className='bg-[#fb5607] w-full flex justify-center items-center gap-[1rem] md:gap-[0.5rem] px-[1rem] py-[0.5rem] rounded-md text-white'>
              <svg className='size-[2.2rem] md:size-[1.7rem]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <span className='whitespace-nowrap'>Update details</span>
            </button>


            <button onClick={deleteHandler} className='bg-[#fb5607] w-full flex justify-center items-center gap-[1rem] md:gap-[0.5rem] px-[1rem] py-[0.5rem] rounded-md text-white'>
              <svg className="size-[2.2rem] md:size-[1.7rem]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

              <span className='whitespace-nowrap'>Remove Recipe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    }</>
  )
}

export default Details