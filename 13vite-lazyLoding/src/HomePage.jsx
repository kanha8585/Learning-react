import React,{useEffect, useState} from 'react'




function HomePage() {

    const[data, setData] = useState([])
  useEffect(() =>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res)=>{
        console.log(res)
        setData(res.data)


    },[])
  })




  return (
    <div>HomePage</div>
  )
}

export default HomePage