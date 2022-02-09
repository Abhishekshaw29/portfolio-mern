import React, { createContext,useReducer } from 'react'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Logout from './components/Logout'
import Notfound from './components/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Route , Routes } from 'react-router-dom'
import { initialState , reducer } from '../src/reducer/UseReducer'

//contextApi
export const UserContext  = createContext();
const Routing = () =>{
  return(
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element = {<Notfound />} />
    </Routes>
  );
}
const App = () => {  
  const [state, dispatch] = useReducer(reducer,initialState);
  return ( 
   
    <>
     <UserContext.Provider value={{state,dispatch}}> 
      <Navbar />
      <Routing />

      </UserContext.Provider>
    </>
   

  )
}

export default App
