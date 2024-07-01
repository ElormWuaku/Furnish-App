import { heroBg } from "../../../assets"

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#F2F2F2] place-content-center">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4">
        <div className="text-5xl flex flex-col">
          <span className="font-thin">Best Designs of</span>
          <span className="font-bold">Furniture Collections</span>
        </div>
        <p>A small river named Duden flows by their place <br />and supplies it with the necessary regelialia.</p>
        <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-[#C2B931] text-sm">Discover</button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="hero"
          className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default Hero