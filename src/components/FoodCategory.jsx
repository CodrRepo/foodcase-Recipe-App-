import React, { useContext, useEffect, useRef } from 'react'
import { recipecontext } from '../context/RecipeContext';
import Lenis from 'lenis'
import gsap from 'gsap';


const FoodCategory = ({ rawData, recipeData, setRecipeData, category, image }) => {
  const currentCategory = useRef(null);

  const filterRecipeData = () => {
    if (category === 'Show All') {
      setRecipeData(rawData);
    } else {
      setRecipeData(rawData.filter(element => element.category.toLowerCase() === category.toLowerCase()));
    }


    const allCategories = document.querySelectorAll('.cat-name');
    allCategories.forEach(cat => {
      gsap.to(cat, {
      background: "transparent",
      color: "black",
      duration: 0.2,
      });
    });
    
    gsap.to(currentCategory.current, {
      backgroundColor: "#fb5607",
      color: "white",
      duration: 0.2,
    });

  }
  useEffect(()=>{
    if (category === 'Show All') {
      gsap.to(currentCategory.current, {
        backgroundColor: "#fb5607",
        color: "white",
        duration: 0.2,
      });
    }
  }, [])


  return (
    <div onClick={e => filterRecipeData()} className='shrink-0 cursor-pointer flex flex-col items-center justify-center'>
      <img className='w-[5rem] md:w-[4rem] aspect-square rounded-full object-cover object-center' src={image} alt="" />
      <h2 ref={currentCategory} className='cat-name px-[1.2rem] py-[0.2rem] rounded-lg text-[1.1rem] md:text-[1rem] mt-[0.5rem]'>{category}</h2>
    </div>
  )
}

export default FoodCategory