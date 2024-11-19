import React, { useState,useEffect } from 'react';
import './Home.css';
import { Header } from '../Header/Header.jsx';
import { Menu } from '../Menu/Menu.jsx';
import { FoodDisplay } from '../Fooddisplay/FoodDisplay.jsx';
import { AppDownload } from '../AppDownload/AppDownload.jsx';

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);


  const [category, setCategory] = useState("All");

  return (
    <>
    
       <Header />
       <Menu category={category} setCategory={setCategory} />
       <FoodDisplay category={category}/>
       <AppDownload/>
    </>
  )
}