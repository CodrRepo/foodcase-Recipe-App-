import React, { useContext } from 'react'
import pizzaImage from "../assets/images/pizza.jpeg"
import { recipecontext } from '../context/RecipeContext'
import { Link } from 'react-router-dom';

const FoodCard = ({ details }) => {
  const { rawData, setRawData, recipeData, setRecipeData, favouriteCount, setFavouriteCount, setCurrentRecipe} = useContext(recipecontext);

  function toggleFavourites(e) {
    setRecipeData(prev => {
      return prev.map(element =>
        element.id === details.id ? { ...element, isFavourite: !element.isFavourite } : element
      )
    })

    setRawData(prev => {
      return prev.map(element =>
        element.id === details.id ? { ...element, isFavourite: !element.isFavourite } : element
      )
    })

    localStorage.setItem("data", JSON.stringify(rawData.map(element =>
        element.id === details.id ? { ...element, isFavourite: !element.isFavourite } : element
      )))

    setFavouriteCount(prev=>details.isFavourite?prev-1:prev+1);
    console.log(favouriteCount);
  }

  function toggleLike(){
    setRecipeData(prev => {
      return prev.map(element =>
        element.id === details.id ? { ...element, likes: element.isLiked?element.likes-1:element.likes+1, isLiked: !element.isLiked } : element
      )
    })
    setRawData(prev => {
      return prev.map(element =>
        element.id === details.id ? { ...element, likes: element.isLiked?element.likes-1:element.likes+1, isLiked: !element.isLiked } : element
      )
    })

    localStorage.setItem("data", JSON.stringify(rawData.map(element =>
        element.id === details.id ? { ...element, likes: element.isLiked?element.likes-1:element.likes+1, isLiked: !element.isLiked } : element
      )))
  }


  return (
    <div className={`relative mb-[1rem] bg-orange-100 flex flex-col items-center justify-center rounded-lg overflow-hidden `}>
      <div id='icons' className={`absolute backdrop-blur py-[0.3rem] rounded-lg top-0 right-0 mr-[0.8rem] md:mr-[0.3rem] mt-[1rem] md:mt-[0.5rem] flex flex-col items-center gap-[1rem] md:gap-[0.3rem]`}>
        <svg onClick={(e) => toggleFavourites(e)} className={`size-[2.5rem] md:size-[1.8rem] cursor-pointer ${details.isFavourite ? 'fill-[#fb5607]' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>

        <div className='flex flex-col items-center text-white leading-none font-[500]'>
          <svg onClick={()=>toggleLike()} className={`size-[2.5rem] md:size-[1.8rem] ${details.isLiked?'fill-red-500':'fill-white'} stroke-none`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <span className='text-[1.5rem] md:text-[1rem] mt-[0.1rem]'>{details.likes}</span>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 leading-none mx-[0.5rem] backdrop-blur px-[0.5rem] py-[0.3rem] rounded overflow-hidden mb-[0.8rem]'>
        <h2 className='text-[1.5rem] md:text-[1rem] font-[500] text-white'>{details.title}</h2>
      </div>

      <Link onClick={()=>setCurrentRecipe(details)} to={`/details/${details.id}`}>
        <img  className={`w-[100vw] h-[30rem] md:h-fit object-cover object-center rounded-lg md:break-inside-avoid`} src={`${details.image}`} alt="pizza" />
      </Link>
    </div>
  )
}

export default FoodCard