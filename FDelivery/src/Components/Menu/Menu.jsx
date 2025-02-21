import React from 'react'
import {menu_list} from "../../assets/assets"
import './Menu.css'

const Menu = ({category,setCategory}) => {
  return (
    <div className='menu'>
      <h1>Explore our menu</h1>
      <p className="menu-text">ChoChoose your food, place your order, and enjoy delicious meals delivered right to your doorstep! From local favorites to global cuisines, we make satisfying your cravings quick and easy.</p>
      <div className="menu-list">
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore'>
                <img className={category==item.menu_name?"active":""} src={item.menu_image} alt=''/>
                <p>{item.menu_name}</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
