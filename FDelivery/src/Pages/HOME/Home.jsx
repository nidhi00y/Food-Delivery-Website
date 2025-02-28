import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Food from '../../Components/FoodDisplay/Food'

const Home = () => {
  const[category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <Food category={category}></Food>
    </div>
  )
}

export default Home
