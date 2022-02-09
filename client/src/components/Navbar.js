import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import navimg from '../images/portfolio.png'
import '../App.css'
import { UserContext } from '../App'


const {state,dispatch} = useContext(UserContext);
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () =>{
    if(state){
      return(
        <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </>
      )
    }
    else{
      return(
        <>
         <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li>
        </>
      )

    }
  }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
  <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">
    <img src= {navimg} alt="Logo" className='logo' />
  </NavLink>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <RenderMenu/>
       
    </ul>
    
  </div>
</nav>
<div className='space'></div>
        </>
    )
}


export default Navbar
