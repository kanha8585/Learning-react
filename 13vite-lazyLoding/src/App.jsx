import  React,{ lazy, Suspense } from 'react'
import './App.css'
// import HomePage from './HomePage'
import Spiner from './Spinner'
const HomePage = lazy(()=> import("./HomePage"))


function App() {
   

  return (
    <>
  
     <Suspense fallback= {<div>loding...</div>}>
      <HomePage />
     </Suspense>
    </>
  )
}

export default App
