import React, { useState } from 'react';
import './Menu.css';

export const Menu = ({category,setCategory}) => {
    const [state, setState] = useState([
        {
            menu_name: "Salad",
            menu_image: "/assets/menu_1.png"
        },
        {
            menu_name: "Rolls",
            menu_image: "/assets/menu_2.png"
        },
        {
            menu_name: "Deserts",
            menu_image: "/assets/menu_3.png"
        },
        {
            menu_name: "Sandwich",
            menu_image: "/assets/menu_4.png"
        },
        {
            menu_name: "Cake",
            menu_image: "/assets/menu_5.png"
        },
        {
            menu_name: "Pure Veg",
            menu_image: "/assets/menu_6.png"
        },
        {
            menu_name: "Pasta",
            menu_image: "/assets/menu_7.png"
        },
        {
            menu_name: "Noodles",
            menu_image: "/assets/menu_8.png"
        }
    ])
    return (
        <>
            <div className="explore-menu container" id='explore-menu'>
                <h1>Explore Our Menu</h1>
                <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our Mission is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
            </div>
            <div className="explore-menu-list container">
                {
                    state.map((item, index) => {
                        return (
                            <div className="explore-menu-list-item" key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>

                                <img src={item.menu_image}  className={category===item.menu_name?"active": ""}/>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }

                
            </div>
            <hr/>
        </>
    )
}