import Home from './assets/components/Home'
import About from './assets/components/About'
import Blog from './assets/components/Blog'
import BlogLayout from './assets/components/BlogLayout'
import SingleBlog from './assets/components/SingleBlog'
import NavBar from './assets/components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'




function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<BlogLayout />} >
              <Route index element={<Blog />} />
              <Route path=':Id' element={<SingleBlog />} />
            </Route>
          </Routes>
       
      </BrowserRouter>

    </>
  )
}

export default App; 
