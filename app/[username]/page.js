import React from 'react'

export default async function Username({ params }) {
  const { username } = await params

  return (
    <>
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-93' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/19.gif?token-hash=dgfPCvgUc-lglN4rJhaKtYn5CiJCJCDGvvb2BHi2FWg%3D&token-time=1770163200" alt="" />
        <div className='absolute -bottom-16 right-[46%] rounded-full border-white border-2'>
          <img className='rounded-full' width={120} height={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV1l-UIrkEsu3k-4DprVS_05Pbf-VgpHUsQ&s" alt="" />
        </div>
      </div>
      <div className='info flex justify-center items-center my-18 flex-col gap-2'>
        <div className='font-bold text-2xl'>
        @{username}
        </div>
        <div className='text-sm'>Creating Animated art for VTT's</div>
        <div className='text-slate-400'>22,578 members . 106 Posts . $18,380/release</div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporter w-1/2 rounded-lg text-white bg-slate-900 p-10">
            <h2 className='text-2xl my-5 font-bold'>Supporters</h2>
            <ul className='mx-5'>
              <li className='my-4 flex gap-2 items-center text-sm'>
                <img className='rounded-full ' width={25} src="/icons8-profile.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className='font-bold'>$50</span> with a massage <span>"I support you bro, Lots of ❤️"</span>
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center text-sm'>
                <img className='rounded-full ' width={25} src="/icons8-profile.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className='font-bold'>$50</span> with a massage <span>"I support you bro, Lots of ❤️"</span>
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center text-sm'>
                <img className='rounded-full ' width={25} src="/icons8-profile.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className='font-bold'>$50</span> with a massage <span>"I support you bro, Lots of ❤️"</span>
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center text-sm'>
                <img className='rounded-full ' width={25} src="/icons8-profile.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className='font-bold'>$50</span> with a massage <span>"I support you bro, Lots of ❤️"</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
              <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
              <div className='flex gap-2 flex-col'>
                <input type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Name'/>
                <input type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Messsage'/>
                <input type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Amount'/>
                <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2 text-center leading-5">Pay</button>
              </div>
              {/* Or choose from this amount */}
              <div className='flex gap-2 mt-5'>
                <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
                <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
                <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}