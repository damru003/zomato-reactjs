import React, { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../context/StoreContext';
import { FoodItem } from '../Fooditem/FoodItem';

export const FoodDisplay = ({ category }) => {

    const { foodlist } = useContext(StoreContext);

  return (
    <>
      <div className='food-display container' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
          {
            foodlist.map((item, index) => {
              if (category==="All" || category===item.category) {
                return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              );
              }
              
            })
          }
        </div>
      </div>
    </>
  );
};
