"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()
    const [currentuser, setCurrentuser] = useState({})
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = fetchuser(username)
        setCurrentuser(u)
    }

    const pay = async (amount) => {
        //Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Funding App", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Sahib Hussain", //your customer's name
                "email": "sahibh8239@gmail.com",
                "contact": "+918690266531" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

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
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Messsage' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2 text-center leading-5">Pay</button>
                        </div>
                        {/* Or choose from this amount */}
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
