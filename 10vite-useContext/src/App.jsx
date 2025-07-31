import {BrowserRouter,Routes,Route} from "react-router-dom"
 import Home from "../src/Home"
import Header from "./Header"
import First from "./First"
import Second from "./Second"
import './App.css'
import { createContext,useState } from "react"

export const ProfileContext = createContext()


function App() {

const [profileData,setProfileData] = useState({name:"kanha", age:"23"})

  return (
   <ProfileContext.Provider value={{profileData,setProfileData}}>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path= '/' element={<Home/>} /> 
      <Route path= '/home' element={<Home/>} /> 
      <Route path= '/first' element={<First/>} /> 
      <Route path= '/second' element={<Second/>} /> 
        

    </Routes>
    
    
    </BrowserRouter>
   </ProfileContext.Provider>
  )
}

export default App;
