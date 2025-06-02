import React, { createContext, use, useEffect, useState } from 'react'
export const recipecontext = createContext(null);
import { nanoid } from 'nanoid';
import healthyBaking from "../assets/images/cupcake.jpeg"
import noBake from "../assets/images/no-bake.jpeg"
import proteinPacked from "../assets/images/protein-packed.jpeg"
import fiveMinutes from "../assets/images/5 minute.jpeg"
import Breakfast from "../assets/images/breakfast.jpeg"
import lessThanFiveMin from "../assets/images/less than 5 minutes.jpeg"
import mealPrep from "../assets/images/meal prep.jpeg"
import chef from "../assets/images/chef.png"

const RecipeContext = ({ children }) => {
    const [rawData, setRawData] = useState([]);

    const [recipeData, setRecipeData] = useState(rawData);
    const [favouriteCount, setFavouriteCount] = useState(0);
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const categoriesImages = {
        "Show All": chef,
        "Healthy Baking": healthyBaking,
        "No-Bake Desserts": noBake,
        "Protein Packed": proteinPacked,
        "5 Minute Recipes": fiveMinutes,
        "Banging Breakfasts": Breakfast,
        "<5 Ingredients": lessThanFiveMin,
        "Meal Prep": mealPrep
    }

    const [isMenuActive, setIsMenuActive] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem("data");
        if (!data) {
            setIsLoading(true);
            localStorage.setItem("data", JSON.stringify([
                {
                    id: nanoid(),
                    title: "Classic American Hot Dog",
                    chef: "Chef Mike Johnson",
                    category: "5 Minute Recipes",
                    image: 'https://i.pinimg.com/736x/dc/53/58/dc535893ff8e9c6fccd321cb05809601.jpg',
                    instructions: "Heat the hot dog sausages in boiling water or grill for 5–7 minutes, Toast hot dog buns lightly on a pan or grill, Place sausage in the bun and top with ketchup, mustard, and relish, Optionally add diced onions, sauerkraut, or shredded cheese, Serve immediately with chips or fries",
                    isLiked: false,
                    likes: 182,
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Oatmeal Chocolate Cookies",
                    chef: "Jamie Park",
                    image: "https://i.pinimg.com/736x/10/40/99/10409913dda95078d47f03eb90f5fcb5.jpg",
                    instructions: "Combine oats, banana, cocoa and bake for 12 mins.",
                    isLiked: false,
                    likes: 58,
                    category: "Healthy Baking",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "No-Bake Cheesecake Cups",
                    chef: "Max Jordan",
                    image: "https://i.pinimg.com/736x/12/1e/28/121e28318005089a4c298a156ccdc78b.jpg",
                    instructions: "Layer crushed biscuits, whipped cream cheese, and chill.",
                    isLiked: false,
                    likes: 88,
                    category: "No-Bake Desserts",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Chocolate Avocado Mousse",
                    chef: "Ella Rose",
                    image: "https://i.pinimg.com/736x/7a/ba/15/7aba15db50a4fb2880cfa354e20b68d5.jpg",
                    instructions: "Blend avocado, cocoa powder, honey, and chill.",
                    isLiked: false,
                    likes: 45,
                    category: "No-Bake Desserts",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Protein Smoothie Bowl",
                    chef: "Liam Gray",
                    image: "https://fedandfit.com/wp-content/uploads/2021/11/211112_Mango-Smoothie-Bowl-3-660x988.jpg",
                    instructions: "Blend banana, protein powder, berries; top with seeds.",
                    isLiked: false,
                    likes: 92,
                    category: "Protein Packed",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Chicken Stir Fry",
                    chef: "Chloe Smith",
                    image: "https://i.pinimg.com/736x/a1/30/3e/a1303e543652b10cb4465fc64213c2de.jpg",
                    instructions: "Cook chicken and veggies with soy sauce and serve.",
                    isLiked: false,
                    likes: 77,
                    category: "Protein Packed",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Avocado Egg Toast",
                    chef: "Ryan Lee",
                    image: "https://i.pinimg.com/736x/84/9f/40/849f40cfa0a34ff3a9cad35ca7d13404.jpg",
                    instructions: "Toast bread, spread mashed avocado, top with fried egg.",
                    isLiked: false,
                    likes: 67,
                    category: "5 Minute Recipes",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Breakfast Burrito",
                    chef: "Nina Shah",
                    image: "https://i.pinimg.com/736x/9d/61/8a/9d618a14b6811376b9568c186c496b43.jpg",
                    instructions: "Wrap scrambled eggs, cheese, beans in a tortilla.",
                    isLiked: false,
                    likes: 91,
                    category: "Banging Breakfasts",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "French Toast",
                    chef: "Chris Roy",
                    image: "https://i.pinimg.com/736x/71/ba/ac/71baacc4594ea9b1277f7c737d566579.jpg",
                    instructions: "Dip bread in egg-milk mixture, fry until golden.",
                    isLiked: false,
                    likes: 80,
                    category: "Banging Breakfasts",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Peanut Butter Banana Bites",
                    chef: "Leo Adams",
                    image: "https://i.pinimg.com/736x/2b/b5/9a/2bb59ad443dc8647c063d89edd1c3d20.jpg",
                    instructions: "Slice banana, spread peanut butter, sandwich with oats.",
                    isLiked: false,
                    likes: 59,
                    category: "<5 Ingredients",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Yogurt Berry Parfait",
                    chef: "Maya Green",
                    image: "https://i.pinimg.com/736x/e2/a1/22/e2a1225edd785f6d1a3d338fad9cc391.jpg",
                    instructions: "Layer yogurt, berries, and granola in a cup.",
                    isLiked: false,
                    likes: 66,
                    category: "<5 Ingredients",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Turkey Meal Prep Box",
                    chef: "Aria Gomez",
                    image: "https://i.pinimg.com/736x/9f/64/b9/9f64b9e23d2eefd6112e3598c2bf7e53.jpg",
                    instructions: "Cook turkey, broccoli, brown rice and portion into boxes.",
                    isLiked: false,
                    likes: 80,
                    category: "Meal Prep",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Quinoa Veggie Bowls",
                    chef: "Jake Moore",
                    image: "https://i.pinimg.com/736x/43/46/98/4346984e87c96f8225fbce9a9d9c5a09.jpg",
                    instructions: "Cook quinoa, add grilled veggies and store.",
                    isLiked: false,
                    likes: 48,
                    category: "Meal Prep",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Zucchini Muffins",
                    chef: "Sara Lin",
                    image: "https://i.pinimg.com/736x/b1/89/be/b189becf8de60bf9ff7285665daea3e7.jpg",
                    instructions: "Mix grated zucchini, almond flour, eggs, and bake.",
                    isLiked: false,
                    likes: 37,
                    category: "Healthy Baking",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Coconut Energy Balls",
                    chef: "Mason Knight",
                    image: "https://i.pinimg.com/736x/65/3f/69/653f692a9d914c004172058a027646e5.jpg",
                    instructions: "Blend dates, coconut, nuts, form balls and chill.",
                    isLiked: false,
                    likes: 73,
                    category: "No-Bake Desserts",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Spicy Tofu Wrap",
                    chef: "Tina Rao",
                    image: "https://i.pinimg.com/736x/09/5b/9e/095b9e1bbed30888577f855ffbc29405.jpg",
                    instructions: "Wrap sautéed tofu, veggies, and sauce in a tortilla.",
                    isLiked: false,
                    likes: 52,
                    category: "Protein Packed",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Egg Mug Omelette",
                    chef: "Will Harper",
                    image: "https://i.pinimg.com/736x/21/2c/5b/212c5bfac687059cdeb9688ed79bad70.jpg",
                    instructions: "Whisk eggs, veggies in mug and microwave 2 mins.",
                    isLiked: false,
                    likes: 46,
                    category: "5 Minute Recipes",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Cinnamon Oats Bowl",
                    chef: "Hannah Brooks",
                    image: "https://i.pinimg.com/736x/12/1b/d4/121bd4c89acac4b4384b6f4c3f0f08f5.jpg",
                    instructions: "Mix oats, milk, cinnamon and microwave 2 minutes.",
                    isLiked: false,
                    likes: 62,
                    category: "Banging Breakfasts",
                    isFavourite: false
                },
                {
                    id: nanoid(),
                    title: "Frozen Banana Pops",
                    chef: "Grace Nolan",
                    image: "https://i.pinimg.com/736x/c0/68/f6/c068f6d3861839fab6e625870cb85fee.jpg",
                    instructions: "Dip banana in chocolate, roll in nuts, freeze.",
                    isLiked: false,
                    likes: 54,
                    category: "<5 Ingredients",
                    isFavourite: false
                }
            ]));
            setRawData(JSON.parse(localStorage.getItem("data")));
            setRecipeData(JSON.parse(localStorage.getItem("data")));
        } else {
            setIsLoading(true);
            setRawData(JSON.parse(localStorage.getItem("data")));
            setRecipeData(JSON.parse(localStorage.getItem("data")));
        }
    }, [])
    return (
        <recipecontext.Provider value={{
            rawData, setRawData, recipeData, setRecipeData, categoriesImages, favouriteCount, setFavouriteCount, currentRecipe, setCurrentRecipe,
            isMenuActive, setIsMenuActive, isLoading, setIsLoading,
        }}>
            {children}
        </recipecontext.Provider>
    )
}

export default RecipeContext