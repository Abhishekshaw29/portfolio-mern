import React, {useEffect , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App'


const Logout = () => {

  const {state,dispatch} = useContext(UserContext);

  //promises
  const navigate = new useNavigate();

  useEffect(() => {
    fetch('/logout',{
      method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
    }).then((res)=>{
      dispatch({type:'USER',payload:false});
      navigate('/login');
      if(res.status !== 200){
        throw new Error(res.error);
      }

    }).catch((err)=>{
      console.log(err);
    });

  });

  return <>
  </>;
};

export default Logout;
