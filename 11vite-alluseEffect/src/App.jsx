import { useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import './App.css'

function App() {
  const[cityName, setCityName] = useState ("")
  const[selectedCity, setSelectedCity] = useState("")
  const[data,setData] = useState({})

 useEffect(() =>{
    function fetchData(){
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=1a4e51c7377e8cf939cbc51bb433a57f")
      .then((res) => res.json())
      .then((result) =>{
        setData(result)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    if(selectedCity !== ""){
      fetchData()

    }
 },[ selectedCity ]) 

 

 function handleClick (){
  setSelectedCity(cityName)

 }
  return (
    <>
        <div className='' style={{backgroundColor:"pink",width:"100%"}}>
        <h2 className='' style={{color:"black",fontWeight:"bold"}}>Weather Data</h2>
        <Link to="/testing">Testing</Link>

        {/* { <select id='city' style={{padding:"10px 10px",marginRight:"10px", backgroundColor:"pink",color:"black",border:"1px solid black",marginLeft:"10px"}} onChange={(e) => setSelectedCity(e.target.value)}>
          <option disabled style={{color:"black",fontWeight:"bold"}}>select your city name</option>
          <option value="jaipur">jaipur</option>
          <option value="delhi">delhi</option>
          <option value="hyderabad">hyderabad</option>
          <option value="nagpur">nagpur</option>
          <option value="chandigarh">chandigarh</option>
        </select> } */}


        <input placeholder='type your city'style={{padding:"10px 10px",backgroundColor:"pink",color:"black",marginRight:"10px"}} type="text"  value={cityName} onChange={(e) => setCityName(e.target.value)} />
         <button onClick={handleClick}>GET</button>
        {data.name !== undefined &&
         
          <div className='result' style={{backgroundColor:"pink",color:"black",fontWeight:"bold", borderRadius:"5px",border:"1pxsolid black"}} >
            <h3>City {data.name}</h3>
            <p>Temprature {Math.round(data.main.temp - 273)}° celcius</p>
            <p>Weather {data.weather[0].main}</p>
            <p>Humidity {data.main.humidity}</p>

          </div>
        }
      </div>

      
    </>
  )
}

export default App
