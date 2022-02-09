import React, { useState, useEffect, useContext } from 'react'
import logo from '../images/banner-image.png'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import about from '../images/about-us.png'
import navimg from '../images/portfolio.png'
import '../App.css'
import { UserContext } from '../App'
import { NavLink, useNavigate } from 'react-router-dom'


const Home = () => {
    

    const navigate = useNavigate();
    const [data, setData] = useState({});

    const calldataPage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },

            });

            const data = await res.json();
            setData(data);
            document.getElementById('username').innerHTML = data.name;

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            window.alert("Please Login to continue");
        }

    }

    useEffect(() => {
        calldataPage();

    }, []);

    const {state,dispatch} = useContext(UserContext);

    return (
        <>
            <main>


                <section className="site-banner pt-5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 site-title">
                                <h1 className="title-text">Hii <span id='username'>___________</span></h1>
                                <h2 className="title-text text-uppercase">I am Abhishek</h2>
                                <h3 className='title-small'>trying to be </h3>
                                <h4 className="title-medium"> Software Engineer</h4>
                                <div className="site-buttons">
                                    <div className="d-flex flex-row flex-wrap">

                                        <a target="_blank" href="https://www.linkedin.com/in/abhishek-shaw-ba81b8144/">
                                            <button type="button" className="btn btn-outline-primary mt-3 text-uppercase">
                                                Hire me
                                            </button>
                                        </a>

                                        <a target="_blank" href="https://drive.google.com/file/d/1G1UzGv45U6bC7mvUD67FS1SqfASYehwa/view?usp=sharing">
                                            <button type="button" className="btn btn-outline-dark mt-3 mx-4 text-uppercase">Get cv</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <img src={logo} alt="banner-img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* ---------------- */}
                <section className="about-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={about} alt="About us" className="fluid img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 about-title">
                                <h2 className="text-uppercase pt-5">
                                    <span className='fonts'>Let me</span>
                                    <br />
                                    <span className='title-medium'>introduce</span>
                                    <br />
                                    <span >myself</span>
                                </h2>
                                <div className="paragraph py-4 w-75">
                                    <p className="para">
                                        I am Abhishek, Software Enthusiast, studying Electrical Engineering in St.Thomas College of Engineering and technology
                                        I live in kolkata the city of joy. I have completed my schooling from Kendriya vidyalaya Fort William , I am passionate about coding and inovvation
                                        coming future is all about automation and AI.

                                    </p>
                                    <p className="para">

                                        Well you read tll here thats great means your are really looking for me Click on contact me button to get me.
                                    </p>
                                </div>
                                <a target="_blank" href="https://drive.google.com/file/d/1G1UzGv45U6bC7mvUD67FS1SqfASYehwa/view?usp=sharing">
                                    <button type="button" className="btn btn-primary my-4 py-2 text-small text-uppercase">Download cv</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                {/* ------------------------ */}

                <section className="services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center services-title">
                                <h1 className="text-uppercase title-text">Skills</h1>
                                <p className="para">
                                    Some of my skills that I Learned and still Learning...
                                </p>
                            </div>
                        </div>
                        <div className="container services-list">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services">
                                        <div className="sevices-img text-center py-4">
                                            <img src={s1} alt="Services-1" />
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-uppercase font-roboto">Wp developer</h5>
                                            <p className="card-text text-secondary">
                                                Well I am not well-versed with PHP but know how to run wordpress and use plugins e.g. elementer, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services">
                                        <div className="sevices-img text-center py-4">
                                            <img src={s2} alt="Services-2" />
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-uppercase font-roboto">ux/ui desing</h5>
                                            <p className="card-text text-secondary">
                                                Can make UserFriendly design for app and website using photoshop , video editing, adobe software  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services">
                                        <div className="sevices-img text-center py-4">
                                            <img src={s3} alt="Services-3" />
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-uppercase font-roboto">web design</h5>
                                            <p className="card-text text-secondary">
                                                Turning Design into web page is my most hated task but as full stack developer I take the responsiblity to make it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services">
                                        <div className="sevices-img text-center py-4">
                                            <img src={s4} alt="Services-4" />
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-uppercase font-roboto">Andriod Develpment</h5>
                                            <p className="card-text text-secondary">
                                                I can make Andriod apps , fast and easy using Andriod studio , with java as backend.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ------------ */}

                <section className="subscribe-us-area">
                    <div className='box'>
                        <div className="row">
                            <div className="text-center subscribe-title">
                                <h4 className="text-uppercase">Get Update From anywhere</h4>
                                <p className="para">Want to know me personally or have some question click on button below</p>
                                <NavLink className="nav-link" to="/contact">
                                    <button to="/contact" className="btn btn-danger">Ask Question</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>




                {/* ------------------------ */}
                <footer className="footer-area">
                    <div className="container">
                        <div className="">
                            <div className=" text-center py-4">
                                <a href="#"><img className='site-logo' src={navimg} alt="logo" /></a>
                            </div>
                            <div className="social text-center">
                                <h5 className="text-uppercase my-4">Follow me</h5>

                                <a target="_blank" href="https://www.facebook.com/abhishekshaw813"><i className="fab fa-lg fa-facebook"></i></a>
                                <a target="_blank" href="https://www.instagram.com/__abhishek_shaw_/"><i className="fab fa-lg fa-instagram"></i></a>
                                <a target="_blank" href="https://github.com/Abhishekshaw29"><i className="fab fa-lg fa-github"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/abhishek-shaw-ba81b8144/"><i className="fab fa-lg fa-linkedin"></i></a>
                            </div>
                            <div className="copyrights text-center">
                                <p className="para">
                                    Copyright ©2022 made by Abhishek with ❤

                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Home
