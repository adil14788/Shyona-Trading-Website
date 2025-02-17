import React, { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }



  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between text-gray-500
        text-xl items-center px-12 h-20'>

            <a href="/">
                <div className="flex items-center gap-7">
                <img src="/img/logo.png" alt="logo" className="w-10" />
                </div>
            </a>

        </div>
    </div>
  )
}

export default Navbar