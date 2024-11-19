import React, {useState} from 'react'
import { Menu } from '../Menu/Menu'
import { FoodDisplay } from '../Fooddisplay/FoodDisplay'

export const MenuPage = () => {

    const [category, setCategory] = useState("All");
  return (
    <>
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
    </>
  )
}