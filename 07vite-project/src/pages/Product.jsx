 import React from 'react'
//  import dummyProduct from "../assets/data/productData"
 import ProductCard from "../components/ProductCard"
 import { useState,useEffect } from 'react'
 import axios from 'axios'
 

 
 function Product() {
    const [productData, setProductData] = useState([])

  useEffect(() => {

    function fecthData() {

      axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          setProductData(res.data)
        })
    }

    fecthData()

  }, [])
   return (
     <div  className="bg"  
      style={{
        maxWidth: "100%",  
        margin: "0 auto",
        display:"flex",
        flexWrap:"wrap",
        gap:"10px"
      }}
    >
    {
      productData.map((product,index)=>{ 
        return(
          <ProductCard

          key={index}
          productData = {product}
        //    key={product.id}
        //  image={product.image}
        //  title={product.title}
        //  description={product.description}
        //  price={product.price}

          
          />
        )
      })
    }


     </div>
   )
 }
 
 export default Product