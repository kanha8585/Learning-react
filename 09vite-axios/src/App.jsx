import { useState,useEffect} from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState({})

  function fetchData(){
    axios.get( 'https://fakestoreapi.com/products/1')
    .then((res)=>{
      console.log(res)
      setData(res.data)

    })
    .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    fetchData()
    console.log(fetchData)
  },[])

  return (
    <>

     <h2>Axios page</h2>
      <div>
          <img src={data ?.image} alt={data ?.title} style={{width:"50%",height:"10%"}}/>
        <p>{data ?.name ?.price}</p>
        <p>{data ?.title}</p>
        <p>{data ?.rate}</p>
      </div>
    </>
  )
}

export default App
''