 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { ProfileContext } from "../App";
import { useContext } from "react";
 
 
 
 
 
 
 function ProductCard({ productData }) {

  let navigate = useNavigate()
  const{setProductDetail} = useContext(ProfileContext)


  function handleProductClick(productData) {

    localStorage.setItem("productDataId",productData.id)
    // console.log(productData)
    setProductDetail(productData)
    navigate("/productDetails")
    
  }

  return (
    <div className="container">
    <div
      className="card "
      
    >
      <img
        className="img"
        src={productData.image}
        alt={productData.title}
        onClick={() => handleProductClick(productData)} />
        
     {/* {productData.title} */}
      <div className="product">
        <h2 className="name">{productData.title.length > 10 ? productData.title.slice(0, 10) + "..." : productData.title}
</h2>
        <p className="title">
          {productData.description.length > 40
            ? `${productData.description.substring(0, 10)}...`
            : productData.description}
        ⭐⭐⭐</p>
        {/* {productData.price} */}
        <div className="about">
          <span className="price" style={{display:"flex"}}> Rs <p>
  {productData.price.toString().length > 3
    ? productData.price.toString().slice(0, 3) + "..."
    : productData.price}
</p>
 </span>
          <button className="btn" style={{marginTop:"37px"}}>
            Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductCard;
