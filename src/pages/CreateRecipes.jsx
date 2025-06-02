import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import shareRecipePoster from "../assets/images/share recipe poster.png"
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipeContext';
import { toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipes = () => {
  const {rawData, setRawData, recipeData, setRecipeData,isMenuActive, setIsMenuActive } = useContext(recipecontext)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();


  const onSubmit = data => {
    data.id = nanoid();
    data.isLiked = false;
    data.likes = 0;
    data.isFavourite = false;
    setRecipeData([data, ...rawData]);
    setRawData([data,...rawData])
    localStorage.setItem("data", JSON.stringify([data, ...rawData]));

    reset();
    toast.success("You made someone's day tasty ❤️", {
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
    navigate("/")
  };

  useEffect(() => {
    setIsMenuActive(false);
    console.log(isMenuActive);
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className='p-[2rem] flex flex-col md:flex-row gap-[3rem] justify-center items-center'>
      <img className='w-[70%] md:w-[30%] rounded-lg' src={shareRecipePoster} alt="" />

      <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col md:border-l-[2px] md:border-orange-300 w-full md:w-[30%] px-[3rem] py-[2rem]`}>

        <label className='text-[1.3rem] md:text-[1rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Dish Name</label>
        <input {...register("title", { required: "Dish name can't be empty"})} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.title?'border-red-500 placeholder:text-red-500':'border-orange-100 placeholder:text-zinc-400'}`} type="text" placeholder='Enter a tasty name'/>
        

        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Chef Name</label>
        <input {...register("chef", { required: true })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.chef?'border-red-500 placeholder:text-red-500':'border-orange-100 placeholder:text-zinc-400'}`} type="text" placeholder='Enter master name' />

        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="title">Dish Category</label>
        <select {...register("category", {required: true })} onChange={(e)=>setSelected(true)} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${selected?'text-black border-orange-100':(errors.category?'text-red-500 border-red-500':'text-zinc-400 border-orange-100')}`} placeholder='Choose a category' id="dish_category">
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
        <input {...register("image", { required: true })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.image?'border-red-500 placeholder:text-red-500':'border-orange-100 placeholder:text-zinc-400'}`} placeholder='Enter your dish image url' type="url" id="image_url" />

        <label className='text-[1.3rem] md:text-[1rem] mt-[2rem] text-[#fb5607] font-[400] md:font-[500]' htmlFor="instructions">Recipe Instructions</label>
        <textarea {...register("instructions", { required: true })} className={`text-[1.5rem] md:text-[1.1rem] mt-[0.3rem] md:mt-[0.1rem] outline-none pb-[0.2rem] border-b-[2px] ${errors.instructions?'border-red-500 placeholder:text-red-500':'border-orange-100 placeholder:text-zinc-400'} h-[7rem]`} name="instructions" id="instructions" placeholder='Write your recipe....' >

        </textarea>

        <input className='text-[1.3rem] md:text-[1rem] bg-[#fb5607] rounded-lg text-white py-[0.7rem] mt-[2rem]' type="submit" value="Create" />

      </form>
    </div>
  )
}

export default CreateRecipes