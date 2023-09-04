'use client'
import React, { use, useState } from 'react'
import Image from 'next/image'
import CreateIcon from '@mui/icons-material/Create';
import Logo from '../../../../public/vercel.svg'

export default function page() {

  const [editMode, setEditMode] = useState(true)

  return (
    <div className='text-black w-full bg-sky-100 h-full overflow-x-hidden overflow-y-scroll flex flex-col gap-3 justify-start items-start p-8'>
      <h5 className='font-medium text-3xl'>Profile</h5>
      <div className='relative flex justify-start items-end bg-white rounded-lg p-10 w-full'>
        <div className='flex flex-col justify-center items-center rounded-lg h-28 w-28 p-1 border-4 border-slate-400'>
          <Image src={Logo} alt={'Logo'} />
        </div>
        <CreateIcon className='relative h-6 w-6 right-4 top-2 border-2 border-slate-500 transform white rounded-full bg-slate-100 p-1 transition-transform ease-in-out duration-300 hover:scale-125' />
        <h6 className='h-full flex items-end font-semibold text-5xl flex-wrap'>
          X Y Z National Public School
        </h6>

        {
          editMode ? (
            <>
              <button
                onClick={() => setEditMode(false)}
                className='absolute right-20 top-4 text-blue-600 font-semibold text-xs border-2 py-1 px-2 rounded-md transition-transform transform duration-300 hover:scale-110 border-blue-500'>CANCEL</button>
              <button className='absolute right-6 top-4 text-blue-600 font-semibold text-xs border-2 py-1 px-2 rounded-md transition-transform transform duration-300 hover:scale-110 border-blue-500'>SAVE</button>
            </>)
            :
            (
              <button
                onClick={() => setEditMode(true)}
                className='absolute right-6 top-4 text-blue-600 font-semibold text-xs border-2 py-1 px-2 rounded-md transition-transform transform duration-300 hover:scale-110 border-blue-500'>EDIT</button>
            )
        }

      </div>

      <div className='relative flex flex-wrap justify-start items-start bg-white rounded-lg gap-5 p-10 w-full'>

        {/* Class */}
        <div className='flex flex-col items-start text-base font-semibold text-slate-800 p-1'>
          <h6 className='font-semibold text-sm'>Class</h6>
          <div className='flex gap-2 justify-end'>
            <label className='text-xs font-light'>from</label>
            <input className='outline-none border-2 border-slate-400 rounded-md w-14 text-center text-sm p-2' type='text' />
            <label className='text-xs font-light'>to</label>
            <input className='outline-none border-2 border-slate-400 rounded-md w-14 text-center text-sm p-2' type='text' />
          </div>
        </div>

        <br/>

        {/* Phone number */}
        <div className='flex flex-col items-start text-base font-semibold text-slate-800 p-1'>
          <h6 className='font-semibold text-sm'>Phone no</h6>
          <input className='outline-none border-2 border-slate-400 rounded-md text-left text-sm p-2' type='text' />
        </div>

        {/* Address */}
        <div className='flex flex-col items-start text-base font-semibold text-slate-800 p-1'>
          <h6 className='font-semibold text-sm'>Address </h6>
          <input className='outline-none border-2 border-slate-400 rounded-md text-left text-sm p-2' type='text' />
          <input className='outline-none border-2 border-slate-400 rounded-md text-left text-sm p-2 mt-2' type='text' />
        </div>

        {/* Pin code */}
        <div className='flex flex-col items-start text-base font-semibold text-slate-800 p-1'>
          <h6 className='font-semibold text-sm'>Pin Code</h6>
          <input className='outline-none border-2 border-slate-400 rounded-md text-left text-sm p-2' type='text' />
        </div>

        {/* Country */}
        <div className='flex flex-col items-start text-base font-semibold text-slate-800 p-1'>
          <h6 className='font-semibold text-sm'>Country</h6>
          <input className='outline-none border-2 border-slate-400 rounded-md text-left text-sm p-2' type='text' />
        </div>

        <label className='absolute bottom-2 right-4 text-xs font-normal text-slate-700 italic'>last updated on: <span>22 August,2023</span></label>
      </div>
    </div>


  )
}
