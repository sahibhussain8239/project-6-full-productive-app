import React from 'react'

export default async function Username({ params }) {
  const { username } = await params

  return (
    <div>
      {username}
    </div>
  )
}