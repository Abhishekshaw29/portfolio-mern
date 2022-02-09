import React, { useState,useContext } from 'react'
import signpic from '../images/about-us.png'
import '../App.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'


const Signup = () => {
 
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""

  });
  const {state,dispatch} = useContext(UserContext);
  const captureData = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert(data.error);
      console.log(data.error);

    }
    else {
      window.alert("Successfully Registered");
      console.log("Successfully Registered");
      dispatch({type:'USER',payload:false});
      navigate("/login");
    }



  };

  

  return (
    <>
      <div className='signup'>

        <section className="v-100 py-4" style={{ backgroundColor: "#eee" }, { padding: "120px" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card cards text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-6">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4">

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="name" className="form-control"
                                value={user.name}
                                onChange={captureData}
                              />
                              <label className="form-label" htmlFor="name">Name</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="email" className="form-control"
                                onChange={captureData}
                                value={user.email}
                              />
                              <label className="form-label" htmlFor="email">Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-mobile fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="phone" id="phone" className="form-control"
                                onChange={captureData}
                                value={user.phone}

                              />
                              <label className="form-label" htmlFor="phone">Phone</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-briefcase fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="work" className="form-control"
                                value={user.work}
                                onChange={captureData}

                              />
                              <label className="form-label" htmlFor="work">Profession</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="password" className="form-control"
                                value={user.password}
                                onChange={captureData}

                              />
                              <label className="form-label" htmlFor="password">Password</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="cpassword" className="form-control"
                                value={user.cpassword}
                                onChange={captureData}

                              />
                              <label className="form-label" htmlFor="cpassword">confirm password</label>
                            </div>
                          </div>
                        </form>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-outline-dark" onClick={postData}>Register</button>

                        </div>



                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src={signpic} className="img-fluid" alt="Signup image" />

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <div className='text-center my-4'>
          <NavLink to="/login" className="text-center" ><button className="btn btn-danger">I am aleady register</button></NavLink>
        </div>
      </div>

    </>
  )
}

export default Signup
