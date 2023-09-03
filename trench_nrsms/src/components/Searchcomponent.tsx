'use client'

import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Searchmodal from '@/modals/Searchmodal';
import { Tooltip } from '@mui/material';

export default function Searchcomponent() {

    const [searchModal, setSearchMoadl] = useState(false)

    return (
        <div className='h-full flex justify-center items-center cursor-pointer'>
            <Tooltip title="Search">
                <div className='border-2 h-full border-slate-300 rounded-lg md:p-1 gap-1 flex justify-center items-center'>
                    <SearchIcon className='h-full cursor-pointer scale-95 md:scale-100' />
                    <label className='text-xs w-20 text-slate-200 font-semibold cursor-pointer hidden md:block'>Search...</label>
                </div>
            </Tooltip>
        </div>
    )
}
