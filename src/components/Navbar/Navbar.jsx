import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

export const Navbar = ({setShowlogin}) => {

    const [menu,setMenu] = useState('home');

    const {getTotalCartAmount} = useContext(StoreContext);


  return (

    <>

    <div className='navbar container' id='navbar'>
        <Link to={'/'}><img src={'/assets/zomato.png'} className='logo' alt='logo'/></Link>
        <ul className="navbar-menu">
            <Link to={'/'} className={menu==="home"?"active":""} onClick={() => {setMenu('home')}}>Home</Link>
            <Link to={'menu-page'} className={menu==="menu"?"active":""} onClick={() => {setMenu('menu')}}>Menu</Link>
            <Link to={'app-download'} className={menu==="mobile-app"?"active":""} onClick={() => {setMenu('mobile-app')}}>Mobile-App</Link>
            <Link to={'contact-us'} className={menu==="contact-us"?"active":""} onClick={() => {setMenu('contact-us')}}>Contact-us</Link>
        </ul>

        <div className="navbar-right">
            
            <div className="navbar-search-icon">
                <Link to={'cart'}><img src={'assets/cart.png'} alt='basket'/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            
        </div>
    </div>

    </>
  )
}