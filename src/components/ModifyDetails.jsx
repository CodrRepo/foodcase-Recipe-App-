import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipeContext';
import { toast, Bounce } from 'react-toastify';
import gsap from 'gsap';

const ModifyDetails = ({ currentData }) => {

  let { id, title, chef, category, image, instructions, } = currentData;
  const {rawData, setRawData, recipeData, setRecipeData } = useContext(recipecontext)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

  const [selected, setSelected] = useState(false);

  const onSubmit = data => {
    console.log(data);
    setRecipeData(recipeData.map(element => element.id === id ? { ...element, title: data.title, chef: data.chef, category: data.category, image: data.image, instructions: data.instructions } : element));
    setRawData(rawData.map(element => element.id === id ? { ...element, title: data.title, chef: data.chef, category: data.category, image: data.image, instructions: data.instructions } : element));

    localStorage.setItem("data", JSON.stringify(rawData.map(element => element.id === id ? { ...element, title: data.title, chef: data.chef, category: data.category, image: data.image, instructions: data.instructions } : element)))

    // reset();
    toast.success("Updated the details ❤️", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  console.log(recipeData, id);

  const onClose = () => {
    gsap.to(".update-panel", {
      x: '100%',
      ease: 'power2.out',
      duration: 0.3,
    })
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className='update-panel opacity-0 fixed top-[50%] -translate-y-1/2 md:-translate-y-[0%] md:absolute md:top-[0%] 2xl:fixed 2xl:top-[5%] right-[0rem] translate-x-[100%] pr-[2.5vw]  md:pr-[2rem]  rounded-lg z-[99]'>
      <form onSubmit={handleSubmit(onSubmit)} className={`min-h-[90vh] relative flex flex-col border-[2px] border-orange-500 rounded-lg w-[95vw] md:w-[28rem] bg-white mx-auto px-[3rem] py-[2rem]`}>

        <svg onClick={onClose} className="size-[2rem] absolute top-0 right-0 mt-[0.5rem] mr-[0.5rem]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>




        <label className='text-[1.3rem] md:text-[1rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Dish Name</label>
        <input defaultValue={title} {...register("title", { required: "Dish name can't be empty" })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.title ? 'border-red-500 placeholder:text-red-500' : 'border-orange-100 placeholder:text-zinc-400'}`} type="text" placeholder='Enter a tasty name' />


        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Chef Name</label>
        <input defaultValue={chef} {...register("chef", { required: true })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.chef ? 'border-red-500 placeholder:text-red-500' : 'border-orange-100 placeholder:text-zinc-400'}`} type="text" placeholder='Enter master name' />

        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Dish Category</label>
        <select {...register("category", { required: true })} onChange={(e) => setSelected(true)} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${selected ? 'text-black border-orange-100' : (errors.category ? 'text-red-500 border-red-500' : 'text-zinc-400 border-orange-100')}`} placeholder='Choose a category' id="dish_category">
          <option value="" hidden>Choose a category</option>
          <option className='text-black' value="healthy baking">Healthy Baking</option>
          <option className='text-black' value="no-bake desserts">No-Bake Desserts</option>
          <option className='text-black' value="protein Packed">Protein Packed</option>
          <option className='text-black' value="5 minute recipes">5 Minute Recipes</option>
          <option className='text-black' value="banging breakfasts">Banging Breakfasts</option>
          <option className='text-black' value="<5 ingredients">{'<'}5 Ingredients</option>
          <option className='text-black' value="meal prep">Meal Prep</option>
        </select>
        {console.log(errors)}

        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Image Url</label>
        <input defaultValue={image} {...register("image", { required: true })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.image ? 'border-red-500 placeholder:text-red-500' : 'border-orange-100 placeholder:text-zinc-400'}`} placeholder='Enter your dish image url' type="url" id="image_url" />

        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="instructions">Recipe Instructions</label>
        <textarea defaultValue={instructions} {...register("instructions", { required: true })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.instructions ? 'border-red-500 placeholder:text-red-500' : 'border-orange-100 placeholder:text-zinc-400'} h-[7rem]`} name="instructions" id="instructions" placeholder='Write your recipe....' >

        </textarea>

        <input onClick={onClose} className='bg-[#fb5607] rounded-lg text-white py-[0.7rem] mt-[2rem]' type="submit" value="Save" />

      </form>
    </div>
  )
}

export default ModifyDetails