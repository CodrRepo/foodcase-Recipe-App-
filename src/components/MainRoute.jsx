import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExploreRecipes from '../pages/ExploreRecipes'
import CreateRecipes from '../pages/CreateRecipes'
import FavouriteRecipes from '../pages/FavouriteRecipes'
import Details from './Details'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<ExploreRecipes/>} />
        <Route path='/create_recipes' element={<CreateRecipes/>} />
        <Route path='/favourite_recipes' element={<FavouriteRecipes/>} />
        <Route path='/details/:id' element={<Details/>}/>

    </Routes>
  )
}

export default MainRoute