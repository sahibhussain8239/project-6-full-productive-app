"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_user, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.KEY_SECRET })

    

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    //create a payment object which shows a pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount,
        to_user: to_user,
        name: paymentform.name,
        message: paymentform.message
    })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenobjectIds: true})
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    // Find all payments sorted by decresing order of amount and flatten objects ids
    let p = await Payment.find({to_user: username}).sort({amount: -1}).lean()
    return p
}

