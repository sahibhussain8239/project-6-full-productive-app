"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashbord = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [router, session])

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='max-w-2xl mx-auto py-5'>
        <h1 className='text-3xl font-bold text-center my-5'>Welcome to your Dashbord</h1>
        <form>
          <div className="space-y-12">
            <div className="pb-5">

              <div className="mt-10">
                {/* For username  */}
                <div>
                  <label htmlFor="username" className="block text-sm/6 font-medium text-white">Username</label>
                  <div className="my-2">
                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                      <input id="username" value={form.username ? form.username : ""} onChange={handleChange} type="text" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                    </div>
                  </div>
                </div>

                {/* for email */}
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-white">Email address</label>
                  <div className="my-2">
                    <input value={form.email ? form.email : ""} onChange={handleChange} type="text" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                  </div>
                </div>

                {/* These blow which are commented out are for dynamic dp & cover pic handling */}
                {/* <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm/6 font-medium text-white">Photo</label>
                  <div className="my-2 flex items-center gap-x-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-12 text-gray-500">
                      <path d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                    <button type="button" className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20">Change</button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-white">Cover photo</label>
                  <div className="my-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                    <div className="text-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" className="mx-auto size-12 text-gray-600">
                        <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" fillRule="evenodd" />
                      </svg>
                      <div className="mt-4 flex text-sm/6 text-gray-400">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300">
                          <span>Upload a file</span>
                          <input id="file-upload" type="file" name="file-upload" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div> */}

                {/* And this is for testing for url basised */}
                {/* For profil pic url */}
                <div>
                  <label htmlFor="profile" className="block text-sm/6 font-medium text-white">Profile Picture</label>
                  <div className="my-2">
                    <input value={form.profile ? form.profile : ""} onChange={handleChange} type="text" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                  </div>
                </div>

                {/* for cover img */}
                <div>
                  <label htmlFor="cover" className="block text-sm/6 font-medium text-white">Cover Picture</label>
                  <div className="my-2">
                    <input value={form.cover ? form.cover : ""} onChange={handleChange} type="text" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                  </div>
                </div>

                {/* for Razorpay id  */}
                <div>
                  <label htmlFor="razorpayid" className="block text-sm/6 font-medium text-white">Razorpay ID</label>
                  <div className="my-2">
                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                  </div>
                </div>
                {/* for Razorpay secret  */}
                <div>
                  <label htmlFor="razorpaysecret" className="block text-sm/6 font-medium text-white">Razorpay Seceret</label>
                  <div className="my-2">
                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                  </div>
                </div>
                <button type="submit" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2 text-center leading-5 mt-3 w-full">Save</button>
                <div>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Dashbord
