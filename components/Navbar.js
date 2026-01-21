import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#0a0027] text-white flex justify-between px-4 h-14 items-center'>
        <div className="logo font-bold text-lg flex justify-center items-center gap-3">
          <img width={50} src="/coffee-cafe.gif" alt="" />
          <span>Fundding App</span>
        </div>
            <ul className='flex justify-between gap-4 '>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Singn Up</li>
                <li>Login</li>
            </ul>
    </nav>
  )
}

export default Navbar