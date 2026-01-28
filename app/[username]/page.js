import PaymentPage from '@/components/PaymentPage'
import React from 'react'

export default async function Username({ params }) {
  const { username } = await params

  return (
    <>
      <PaymentPage username={username}/>
    </>
  )
}