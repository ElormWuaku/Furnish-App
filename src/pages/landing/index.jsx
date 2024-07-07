import Navbar from "../../components/navbar"
import About from "./components/about"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Production from "./components/production"
import Services from "./components/services"


const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
      <Production/>
    </div>
  )
}

export default LandingPage