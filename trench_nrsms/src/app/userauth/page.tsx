'use client'

import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

export default function page() {

  const [signUpMode, setSignUpMode] = useState(false)
  const [user, setUser] = useState(
    {
      email: '',
      password: ''
    }
  )

  function loginUser() {
    toast.success('Successfully Login!')
  }

  function createUser() {
    toast.success('Successfully User Created!')
  }

  return (
    <div className='bg-black h-screen w-screen flex flex-col justify-center items-center gap-3'>
      <input
        className='text-black'
        type='text'
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value })
        }}
      />
      <input
        className='text-black'
        type='text'
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value })
        }}
      />
      <button
        onClick={() => {
           if(signUpMode)
           createUser()
            else
            loginUser()
        }}
      >{signUpMode ? 'Sign Up' : 'Log in'}</button>
      <label
        onClick={() => {
          setSignUpMode(!signUpMode)
        }}
        className='text-xs cursor-pointer'>{signUpMode ? <span>Already Have an account?</span> : <span>Don't have an account?</span>}</label>
    </div>
  )
}
