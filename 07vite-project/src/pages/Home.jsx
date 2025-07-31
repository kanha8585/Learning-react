import React from 'react'
import Header from './Header'
import Footer from './Footer'
import heroImage from "../assets/image/heroImage.webp"

function Home() {
    return (
        <>
            <div className='w-full'>
                <div className='relative w-full'>
                    <img src={heroImage} alt='hero ' style={{width:"100%"}} />
                    <div className='absolute right-[6rem] bottom-[8rem] w-1/4'>
                        <h2 className=''style={{padding:"0px 10px"}}>SMART SHOPPING</h2>
                        <button className='' style={{margin:"10px 10px"}}>SHOP NOW</button>


                    </div>
                </div>
            </div>

        </>


    )
}



export default Home;