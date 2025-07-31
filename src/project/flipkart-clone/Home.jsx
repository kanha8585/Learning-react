import Header  from "../../Header.jsx";
import Footer from "../../Footer.jsx";
import Hero from "../counter/Hero.jsx";


function Home(){
    return(
        <div className="home">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    )
}

export default Home