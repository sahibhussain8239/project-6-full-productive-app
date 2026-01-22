"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()


  return (
    <nav className='bg-[#0a0027] text-white flex justify-between px-4 h-14 items-center'>
      <div >
        <Link className="logo font-bold text-lg flex justify-center items-center gap-3" href={"/"}>
        <img width={50} src="/coffee-cafe.gif" alt="" />
        <span>Fundding App</span>
        </Link>
      </div>
      {/* <ul className='flex justify-between gap-4 '>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Singn Up</li>
                <li>Login</li>
            </ul> */}

      <div className='relative'>
        {session && <>
          <button onClick={()=>{setshowdropdown(!showdropdown)}} onBlur={()=> {setTimeout(() => {setshowdropdown(false)}, 100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center mx-4 text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2 text-center leading-5" type="button">
            Welcome {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-25 bg-gray-700 rounded-sm shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashbord" className="inline-flex items-center w-full p-2 hover:bg-gray-600 rounded">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-600 rounded">Your page</Link>
              </li>
              <li>
                <Link onClick={()=> signOut()} href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-600 rounded">Sign out</Link>
              </li>
            </ul>
          </div>
        </>}
        
        {session &&
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2 text-center leading-5 me-2 my-3" onClick={() => { signOut() }}>Logout</button>
        }
        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2 text-center leading-5 me-2 my-3">Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar