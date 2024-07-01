import Navbar from "../../components/navbar"

import About from "./components/about"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Reviews from "./components/reviews"
import Services from "./components/services"
import Testimonials from "./components/testimonials"

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
      <Reviews/>
      <Testimonials/>

    </div>
  )
}

export default LandingPage