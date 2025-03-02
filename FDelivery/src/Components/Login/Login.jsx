import React,{useState} from 'react'
import './Login.css'

const Login = ({setShowLogin}) => {

  const [currState,setCurrState]= useState("Login")

  return (
    <div className='login'>
      <form className="login-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src='src\assets\cross_icon.png'></img>
        </div>
        <div className="login-form">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            
            <input type="text" placeholder='Your Email' required/>
            <input type="text" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-condition">
            <input type='checkbox' required></input>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed soluta nesciunt sit, quo ducimus eos, inventore omnis maxime, obcaecati quis quia tenetur cumque. Molestiae reprehenderit corrupti delectus rerum quam.</p>
        </div>
        {currState==="Login"?<p>Create a new account ? <span onClick={()=>setCurrState("Sign In")}>Click Here!</span></p>
        :<p>Already have an account?<span onClick={setCurrState("Sign in")}>Sign in</span></p>}
        
        
      </form>
    </div>
  )
}

export default Login
