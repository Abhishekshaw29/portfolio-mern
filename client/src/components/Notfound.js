import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css'
import { UserContext } from '../App';


const Notfound = () => {
  const {state,dispatch} = useContext(UserContext);
  return <> 
  <div className="center">
      
  <div className='text-center'>
  <h1>404!</h1>
      <h3>page not found :(</h3>
      <NavLink to="/" className="text-center" >
          <br />
    <button className="btn btn-outline-danger">Home</button></NavLink>
        
</div>


  </div>

  </>;
};

export default Notfound;
