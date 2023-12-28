"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton() {
  return (
    <div><button onClick={()=> signOut({callbackUrl: `${window.location.origin}`})}>LOG OUT</button></div>
  )
}
