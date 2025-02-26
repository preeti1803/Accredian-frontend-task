import React from 'react'
import "../index.css"

export const Navbar = () => {
  return (
    <div className="bg-blue-100 text-black text-sm py-2 px-4 flex justify-center sm:h-[60px]  items-center">
  <p className="mr-2 flex justify-center ">Navigate your ideal career path with tailored expert advice</p>
  <a href="#" className="text-blue-600 font-semibold">Contact Expert</a>
</div>
  )
}
 
export default Navbar;