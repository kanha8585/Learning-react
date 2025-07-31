import React from 'react'

function Footer() {
  return (
    // <div className=''>
    //    <h5 className='footer'style={{padding:"10px 10px", fontSize:"2rem"}}>Footer Page</h5> 
    //    <p style={{whiteSpace:"normal",wordWrap:"break-word", width:"80%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus officia dolorum doloremque, illum odio magnam tempora non, 
    //     voluptate in corporis quibusdam unde fugit reiciendis numquam quod amet dolore illo?</p>
         
    //      </div>
    
  <div className='about-container'>
      <div className='contact-us'>
        <h3 style={{paddingLeft:"10px",lineHeight:"30px", paddingTop:"20px",color:" rgb(119, 118, 118)",fontSize:"12px"}}>ABOUT</h3>
        <ul style={{color:"white",paddingLeft:"10px",lineHeight:"30px",fontSize:"12px"}}>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Flipkart Stories</li>
          <li>Press</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div className='group'>
        <h3>GROUP COMPANIES</h3>
      </div>


    </div>
    
  

  )
}

export default Footer;


{/* <style>
  .contact-us h3{
  color: rgb(119, 118, 118);
  line-height: 40px;
  padding-left: 10px;

}

.contact-us ul{
  padding-left: 10px;
  line-height: 30px;
}
</style> */}