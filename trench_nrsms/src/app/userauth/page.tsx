'use client'

import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import axios from 'axios'
import creteuserwithemailHandler from '@/handler/userauth';

export default function page() {

  const [signUpMode, setSignUpMode] = useState(true)
  const [user, setUser] = useState(
    {
      email: 'yaryan3087@gmail.com',
      password: 'Qwerty1234@'
    }
  )

  function loginUser() {
    toast.success('Successfully Login!')
  }

  function createUser() {

    creteuserwithemailHandler(user.email, user.password)

  }

  return (
    <div
      className='bg-white h-screen w-screen flex justify-center items-center px-5 overflow-hidden'>
      <div className='bg-white my-6 rounded-lg shadow-sm shadow-gray-500 p-10 flex flex-col justify-center items-center gap-6 text-slate-800'>
        
        <h4 className='font-semibold text-2xl text-blue-900 select-none'>
          {signUpMode ? <span>Sign up</span> : <span>Log in</span>}
          </h4>

        <div className='relative flex flex-col justify-center items-start'>
          <label
            htmlFor="user-email"
            className='absolute select-none -top-3 text-slate-500 font-normal text-sm text-left w-fit bg-white px-1 mx-3'>{user.email ? 'Email' : ''}</label>
          <input
            id='user-email'
            className='border-2 border-blue-600 outline-green-400 rounded-lg py-2 px-3 text-slate-600 font-medium'
            type='text'
            value={user.email}
            placeholder='Email'
            onChange={(e) => {
              setUser({ ...user, email: e.target.value })
            }}
          />
        </div>

        <div className='relative flex flex-col justify-center items-start'>
          <label
            htmlFor="user-password"
            className='absolute select-none -top-3 text-slate-500 font-normal text-sm text-left w-fit bg-white px-1 mx-3'>{user.email?'Password':''}</label>
          <input
            id='user-password'
            className='border-2 border-blue-600 outline-green-400 rounded-lg py-2 px-3 text-slate-600 font-medium'
            type='password'
            value={user.password}
            placeholder='Password'
            onChange={(e) => {
              setUser({ ...user, password: e.target.value })
            }}
          />
        </div>
        <button
          className='border-2 px-3 py-2 rounded-lg border-blue-600 text-blue-900 font-bold text-base select-none hover:bg-slate-100 active:scale-95'
          onClick={() => {
            if (signUpMode)
              createUser()
            else
              loginUser()
          }}
        >{signUpMode ? 'Sign Up' : 'Log in'}</button>
          <label
            onClick={() => {
              setSignUpMode(!signUpMode)
            }}
            className='text-xs cursor-pointer select-none'>{signUpMode ? <span>Already Have an account?</span> : <span>Don't have an account?</span>}</label>
      </div>
    </div>
  )
}
