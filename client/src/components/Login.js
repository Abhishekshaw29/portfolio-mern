import React,{useContext, useState} from 'react'
import loginpic from '../images/loginpage.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
const Login = () => {
  
 const {state,dispatch} = useContext(UserContext);

  const navigate = useNavigate();
       const [email , setEmail]  = useState("");
       const [password ,setPassword] = useState("");

       const postData = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin",{
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify({
            email,password
          })
        });
        const data = await res.json();
        if(res.status === 400 || !data){
          window.alert(data.message);
          console.log(data.message);
        }
        else{
          dispatch({type:'USER',payload:true});
          window.alert("Logged in Sucessfully");
          console.log("Logged in Sucessfully");
          navigate('/');
        }

        
      }



  return (
    <div className='signup'>

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="row d-flex align-items-center justify-content-center h-100">

              <div className="col-md-8 col-lg-7 my-4 col-xl-6">

                <img src={loginpic} className="img-fluid" alt="Phone image" />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4 mx-4">
                    <input type="email" id="email" className="form-control" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <label className="form-label" htmlFor="email">Email address</label>
                  </div>

                  <div className="form-outline mb-4 mx-4">
                    <input type="password" id="password" className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>
                  <button type="submit" className="btn btn-primary mx-4" onClick={postData}>Log in</button>
                  <div className='text-center mt-4'>
                    <NavLink to="/signup" className="text-center" ><button className="btn btn-danger">Sign up here ?</button></NavLink>
                  </div>



                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
