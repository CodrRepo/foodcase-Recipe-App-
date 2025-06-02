import React, { useContext, useEffect, useState } from 'react'
import { recipecontext } from '../context/RecipeContext'
import FoodCard from '../components/FoodCard';
import { Link } from 'react-router-dom';

const FavouriteRecipes = () => {
  const {rawData, favouriteCount, setFavouriteCount, setIsMenuActive} = useContext(recipecontext);
  // console.log(favouriteCount);


  useEffect(() => {
    setIsMenuActive(false);
    let favCount = 0;
    rawData.forEach(element=>element.isFavourite && favCount++);
    setFavouriteCount(favCount);
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100); // let DOM update first
  
    return () => clearTimeout(timeout);
  }, [rawData]);


  return (
    <>
    
      <div className='p-[2rem]'>
        {favouriteCount>0 ? 
        <div>
          <h2 className='mt-[1rem] text-[4rem] md:text-[5rem] leading-none text-[#fb5607] text-center dancing-script-font font-[600] md:font-[500]'>Your Favourites Recipes</h2>
          <div className='columns-1 md:columns-6 gap-[2rem] mt-[3rem]'>
            {rawData.map(element=>{
              if(element.isFavourite){
                // setFavouriteCounts(prev=>prev++);
                return <FoodCard key={element.id} details={element}/>
              }
              })}
        </div>
      </div> :

       <div className='h-[70dvh] flex flex-col justify-center items-center'>
          <h2 className='text-center text-[2.2rem] md:text-[2rem]'>No Favourite Dish Added</h2>
          <Link className='text-[1.4rem] md:text-[1rem] bg-[#fb5607] px-[2rem] py-[0.5rem] rounded-md text-white mt-[1rem] md:mt-[0.6rem]' to="/">Explore Tastiest Dishes</Link>
       </div>
       }
    </div>
    </>
  )
}

export default FavouriteRecipes