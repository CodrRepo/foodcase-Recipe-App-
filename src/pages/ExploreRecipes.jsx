import React, { useContext, useEffect } from 'react'
import FoodCategory from '../components/FoodCategory'
import FoodCard from '../components/FoodCard'
import { recipecontext } from '../context/RecipeContext';
import Lenis from 'lenis'
import Loader from '../components/Loader';

const ExploreRecipes = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });



  const data = useContext(recipecontext);
  const { rawData, recipeData, setRecipeData, categoriesImages, setIsMenuActive, isLoading, setIsLoading } = data;
  const categories = Object.keys(categoriesImages);


  useEffect(() => {
    setIsMenuActive(false);

    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100); // let DOM update first

    return () => clearTimeout(timeout);
  }, [rawData]); // or whatever state holds the filtered data

  return (
    <>
      {isLoading?<div className='px-[1rem] md:px-[2rem] pb-[7rem]'>
        <h1 className='text-[4rem] font-[600] dancing-script-font md:font-[500] md:text-[5rem] leading-[4.5rem] md:leading-[7.5rem] text-[#fb5607] text-center mt-[3rem]'>Explore Tastiest Recipes</h1>
        <div className='hide-scrollbar w-full flex  items-center xl:justify-center mt-[3rem] overflow-auto'>
          {categories.map(element => <FoodCategory key={element} rawData={rawData} recipeData={recipeData} setRecipeData={setRecipeData} category={element} image={categoriesImages[element]} />)}
        </div>

        <div className={`${recipeData.length > 0 ? 'columns-1 md:columns-6' : 'w-full'} mt-[4rem] gap-[2rem] md:mx-auto min-h-[50vh] md:break-inside-avoid`}>
          {recipeData.length > 0 ? recipeData.map((element) => <FoodCard key={element.id} details={element} />)
            : <div className='bg-orange-100 w-fit mx-auto px-[3rem] py-[1rem] rounded-lg text-center'>
              <p className='text-[1.5rem] text-[#fb5607] font-[500]'>OOP's! No recipe in this catogory</p>
              <p className='text-[1.2rem] mt-[0.2rem]'>Try another category today</p>
              <span className='text-[3rem] mt-[1rem] inline-block'>🥺</span>
            </div>}
        </div>
      </div>: <Loader/>}
    </>
  )
}

export default ExploreRecipes