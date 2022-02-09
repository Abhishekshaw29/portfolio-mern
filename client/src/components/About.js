import React, { useEffect, useState, useContext } from 'react'
import '../About.css'
import { UserContext } from '../App'

import { useNavigate, NavLink } from 'react-router-dom'


const About = () => {
    
    
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const {state,dispatch} = useContext(UserContext);

    const calldataPage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },

            });
           
            const data = await res.json();
            if(data){
                dispatch({type:'USER',payload:true});
                setData(data);
            }

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            navigate('/login');
        }

    }

    useEffect(() => {
        calldataPage();

    }, []);
    
    return (
        <>
            <div className="container">
                <div className="main-body">

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>Abhishek shaw</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">St.thomas college of engineering and technology</p>
                                            <NavLink to="/contact" ><button className="btn btn-primary">Message</button></NavLink>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 mb-4">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Work</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.work}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn btn-outline-dark">Edit</button>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
