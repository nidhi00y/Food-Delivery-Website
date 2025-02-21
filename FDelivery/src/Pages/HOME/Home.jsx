import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'

const Home = () => {
  const[category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
