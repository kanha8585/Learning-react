import { useState } from 'react'
import './App.css'
import UserCard from './useEffect/App'; 

function App() {

  const[data,setData] = useState({})


  function handleFetch(){
      fetch("https://randomuser.me/api/")
  .then((res)=>{
    return res.json()
  }).then((res)=>{
    console.log(res.results[0])
    setData(res.results[0])
  })

  }


  return (
    <>
    {/* <h1>RANDOM API USER</h1>
    <button onClick={handleFetch}>Get Data</button>
    { data.name !== undefined && 
    <div>
      <img src={data.picture.large} alt="User"/>
      <p>{data.name.first}</p>
      <p>{data.name.last}</p>
      <p>{data.email}</p>
      
    </div>

} */}

<UserCard/>
     
    </>
  )
}

export default App;
 