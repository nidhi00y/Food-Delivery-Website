import React, { useContext } from 'react'
import './Food.css'
import {StoreContext} from '../../Context/Contet'
import FoodItem from '../FoodItem/FoodItem'


const Food = ({category}) => {
  const {food_list} = useContext(StoreContext)
  return (
    
    <div className='food_display' id='food_display'>
       <h2>Top dishes near you</h2>
       <div className="food-dispaly-list">
        {food_list.map((item,index)=>{
          return <FoodItem key={index} id={item._id} name={item.name} desciption={item.description} image={item.image} price={item.price}  />
        })}
       </div>
    </div>
  )
}

export default Food
