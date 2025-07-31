import React from 'react'
import heroImage from "../assets/image/heroImage.webp"
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <> 
    
    <div className=' w-full  '>
        <div className='relative w-full'>
            <img src={heroImage} alt='hero'  />
            <div className='absolute translate: -50% -50% left-[70%] bottom-[20%] w-1/4'>
                <h2 className='text-white text-3xl pb-3 font-bold'>Smart Shopping Trusted by Millions</h2>
                <button className='px-3 py-1 bg-white rounded-2xl '>Shop Now</button>
            </div>
        </div> 
        
    </div> 
     </>
  )
}

export default Home;