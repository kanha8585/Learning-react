import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";

function SignUp() {
    let navigate = useNavigate()
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserProfile(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log("hello")
        localStorage.setItem("userData" , JSON.stringify(userProfile))
        console.log(userProfile)
    
        setUserProfile({
        name: "",
        email: "",
        phone: "",
        username: "",
        password: ""
        });
    
    alert("form submited")
    navigate("/login")

         
    }

    return (
        <div className='register'>
            <div className='container'>
                <div className='right'>
                    <form method='post' onSubmit={handleRegister} style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}>
                        <input type='text' name='name' placeholder='Name' value={userProfile.name} onChange={handleChange} required /><br />
                        <input type='email' name='email' placeholder='Email' value={userProfile.email} onChange={handleChange} required /><br />
                        <input type='number' id='mobile' name='phone' placeholder='Phone' value={userProfile.phone} onChange={handleChange} required /><br />
                        <input type='text' name='username' placeholder='Username' value={userProfile.username} onChange={handleChange} required /><br />
                        <input type='password' name='password' placeholder='Password' value={userProfile.password} onChange={handleChange} required /><br />
                        <div className='btns'>
                            <button type='submit' name='register'>Submit</button>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;