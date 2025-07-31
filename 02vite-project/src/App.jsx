 import { useState } from "react";


 function App(){
    const[inputVal,setInputVal] = useState("")
    const[list,setList] = useState([])


    function handleClick(){
      setInputVal('')
      console.log(inputVal)  

    }

    function handleChange(){
      setInputVal(e.target.value)
    }

    return (
      <>
      <div>
        <input onChange={(e)=>setInputVal(e.target.value)} value={inputVal}/>
        <button onClick={handleClick}>Click</button>
        <p> {inputVal}</p>
      </div>
      </>
    )
 }


 export default App