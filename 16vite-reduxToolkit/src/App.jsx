 import {useDispatch,useSelector} from 'react-redux'
import './App.css'
import { increment, decrement, reset } from './redux/features/counter'

function App() {
  const count= useSelector((state) => state.counter.value)
  const dispatch= useDispatch()

  console.log(count)

  return (
    <>
    <p>Counter App</p>
       <button onClick={() => dispatch(increment())}>Inc +</button>
    <p>{count}</p>
    <button onClick={() => dispatch(decrement())}>Dec -</button>

    <button onClick={() => dispatch(reset())} style={{marginLeft:"20px"}}>reset</button>
    </>
  )
}
       
    
  

export default App
