'use client'

import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Searchmodal from '@/modals/Searchmodal';

export default function Searchcomponent() {
    
    const [searchModal, setSearchMoadl] = useState(false)

    return (
        <div className='h-full flex justify-center items-center'>
            <div
            onClick={()=>{setSearchMoadl(!searchModal)}}  
            className='border-2 h-full border-slate-300 rounded-lg px-1 flex justify-center items-center'>
                <SearchIcon className='h-full'/>
                <input className='text-slate-600 w-36 font-medium mx-2 bg-transparent outline-none hidden md:block' type='text' placeholder='Search...' />
            </div>
        </div>
    )
}
