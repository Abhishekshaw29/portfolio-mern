import React, { useState, useEffect,useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import '../Contact.css'


const Contact = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [messages, setMessages] = useState("");
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

    const postData = async (e) => {
        e.preventDefault();
        const res = await fetch("/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages
                
            })
        });
        const data = await res.json();
      
        if (data.status === 400) {
            window.alert(data.message);
             console.log(data.message);
        }
        else {
            window.alert(data.message);
            console.log(data.message);
            setMessages('');
        }


    }





    return (
        <>
            <div className="contact_info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

                                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="contact_info_image"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Phone</div>
                                        <div className="contact_info_text">+91 9883153542</div>
                                    </div>
                                </div>
                                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="contact_info_image"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Email</div>
                                        <div className="contact_info_text">abhishekshaw813@gmail.com</div>
                                    </div>
                                </div>
                                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="contact_info_image"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Github</div>
                                        <div className="contact_info_text">github.com/Abhishekshaw29</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container">
                                <div className="contact_form_title">Get in Touch</div>
                                <form action="#" id="contact_form">
                                    <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" value={data.name} required="required" data-error="Name is required." />
                                        <input type="text" id="contact_form_email" className="contact_form_email input_field" value={data.email} required="required" data-error="Email is required." />
                                        <input type="text" id="contact_form_phone" className="contact_form_phone input_field" value={data.phone} />
                                    </div>
                                    <div className="contact_form_text">
                                        <textarea id="contact_form_messages" className="text_field contact_form_messages" name="messages" rows="4" placeholder="Messages" required="required" onChange={(e) => setMessages(e.target.value)} value={messages} />
                                    </div>
                                    <div className="contact_form_button">
                                        <button className="button contact_submit_button" onClick={postData} >Send Messages</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel"></div>
            </div>


        </>
    )
}

export default Contact
