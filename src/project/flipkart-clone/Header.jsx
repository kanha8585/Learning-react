
function Header(){


    return(
     <div style={{display:"flex",fontSize:"1rem",justifyContent:"space-between",background:"pink",padding:"0px 10px"}}>  
     <h1>FLIPKART</h1>
       <div>
        <input type="text"placeholder="Search products..." style={{textAlign:"center",
            alignItems:"center",
            marginTop:"20px",
            padding:"10px"}}/>
        <button style={{padding:"10px",marginLeft:"5px",}}>Search</button>
      </div>
     <ul style={{display:"flex",gap:"20px",listStyle:"none",fontSize:"20px"}}>
        <li style={{textDecoration:"underline"}}>HOME</li>
        <li style={{textDecoration:"underline"}}>SHOPE</li>
        <li style={{textDecoration:"underline"}}>ABOUT</li>
        <li style={{textDecoration:"underline"}}>CONTANCT</li>

     </ul> 
     
     </div>  
    )


}

export default Header