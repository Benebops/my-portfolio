import Home from "../components/Home"
import Nav from "../components/Nav"
import Expertise from "../components/Expertise"
import About from "../components/About"
import "./homePage.css"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="ttt">
        <Nav/>
        <Home/>
        <Expertise/>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage