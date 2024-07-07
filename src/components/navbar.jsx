// 

import { Link } from "react-router-dom"
import K from "../constants"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 fixed w-full left-0 top-0">
      <span className="font-bold text-2xl">Furnish</span>
      <div className="flex gap-x-10">
        {K.NAVLINKS.map((item, index) => (
          <Link key={index} to={item.path} className="text-lg text-gray-800 hover:text-gray-600 transition-colors duration-200">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
