 import useCounter from "./coustom-hook/useCounter"
import './App.css'

function App() {

  const{count, incerement, decerment, reset} = useCounter()
  
  return (
    <>
    <div>
      <button onClick={incerement}>inc</button>
      <p>{count}</p>
      <button onAuxClick={decerment}>dec</button>
      <button onClick={reset}>reset</button>

    </div>
      
    </>
  )
}

export default App
