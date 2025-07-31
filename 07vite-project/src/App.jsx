import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext,useState } from "react";
import ProductDetails from "./components/ProductDetails";
export const ProfileContext = createContext()
function App() {
  const [profileData, setProfileData] = useState({})
  const[productDetail,setProductDetail] = useState({})
  return (

    <ProfileContext.Provider value={{profileData, setProfileData,productDetail,setProductDetail}}>
    <div style={{ minHeight: "100vh" }}>
      <div className="max-w-[1460px] mx-auto">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
              <Route path="/productDetails" element={<ProductDetails />} />



          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
    </ProfileContext.Provider>
  );
}

export default App;

