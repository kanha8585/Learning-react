import { useRef } from 'react'
import './App.css'
import BgImage from "../src/image/bg.jpg"
import OtpGenretor from './OtpGenretor'


function App() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
    //  console.log(inputRef.current.value) 
  }
  
  function handleBlur() {
    inputRef.current.blur()
    console.log(inputRef.current.value)
    inputRef.current.value = ""

  }
  return (

    <>
      <div>
        {/* <img src= {BgImage} alt="background"  style={{width:"100%"}}/> */}
        {/* <h3>USE REF</h3>
        <input type='text' ref={inputRef} style={{ padding: "10px 10px" }} />
        <button onClick={handleClick} style={{ marginLeft: "15px" }}>FOCUS</button>
        <button onClick={handleBlur} style={{ marginLeft: "15px" }}>BLUR</button> */}

        <OtpGenretor />
      </div>
    </>
  )
}

export default App
