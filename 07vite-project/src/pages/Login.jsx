 import React, { useState,useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import loginImg from "../assets/image/loginimg.webp"
import { ProfileContext } from '../App';

function Login() {
    const[name,setName] = useState("")
    const[password,setPassword] = useState("")
    let navigate = useNavigate();
  

    const {setProfileData} = useContext(ProfileContext)

   

    function handleRegister(e) {
        e.preventDefault();
     
        let data = JSON.parse(localStorage.getItem("userData"))
      if (data.username === name && data.password === password){
            alert("you have successfully logged in")
            navigate("/")

        }else{
            alert("sorry wrong password or username")
            navigate("/login")
        }
        setName("")
        setPassword("")

        // navigate("/");
          
    } 

    return (
        <div className='register'>
            
            <div className='container' style={{backgroundColor:"#526d82", width:"30%"}}>
                <form onSubmit={handleRegister}>
                     <img src={loginImg} alt='login ' style={{width:"30%",display:"block",margin:"auto",paddingTop:"15px",borderRadius:"10px"}} />

                    {/* <input type='email'  name='email'  placeholder='Enter Your Email'  value={userProfile.email}  onChange={handleChange}  required /><br /> */}
                      <input type='text' name='name' placeholder='name' value={name} onChange={(e)=>setName (e.target.value)}required/><br/>

                    <input  type='password'name='password'placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} required /><br />

                    <button className='btn' style={{backgroundColor: "black" }} type='submit'>Login</button>
                    <p className='para' style={{textAlign:"center", paddingRight:"20px",fontSize:"1rem",color:"black",fontSize:"1.2rem",marginBottom:"15px"}}>Welcome to Your account ?
                        <Link to="/signUp">Register</Link>

                      
                    
                    </p>  
                </form>
            </div>
        </div>
    );
}

export default Login;
