import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import { ProfileContext } from "../App";


function Header(){
    const [showsearchInput,setShowsearchInput]=useState(false)
    const[inputval,setInputValue]=useState("")

    const {profileData } = useContext(ProfileContext);


    function handleonMouseOver(){
        setShowsearchInput(true)
    }

    function handleonMouseOut(){
        setInputValue("")
        setShowsearchInput(false)
    }

    function handleChange(e){
        setInputValue(e.target.value)

    }



    return(
        <>
         <div className="header">
  <h2 className="logo">
    <Link to={"/"}>E-commerce</Link>
  </h2>

  <div className="headerRight">
    <div className="formDiv">
      <form onMouseEnter={handleonMouseOver} onMouseLeave={handleonMouseOut}>
        <input
          type="text"
          className={showsearchInput ? "showInput" : "closeInput"}
          placeholder="Search..."
          onChange={handleChange}
          value={inputval}
        />
      </form>
    </div>

    <ul className="headerUl">
      <li>
        <Link to="/Home" className="text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Product" className="text-black">
          Product
        </Link>
      </li>
      <li>
        <Link to="/About" className="text-black">
          About
        </Link>
      </li>
       
        {(profileData.name != undefined) ?  

             <li className="" style={{color:"black",fontWeight:"500"}}> {profileData.name} </li>  : 
     
      <li>
        <Link to="/SignUp" className="text-black">
          SignUp
        </Link>
      </li>
}
    </ul>
  </div>
</div>

<div className="min-h-[80px]"></div>

        </>
    )
}

export default Header;

