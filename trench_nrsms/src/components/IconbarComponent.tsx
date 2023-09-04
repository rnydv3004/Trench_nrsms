'use client'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import Tooltip from '@mui/material/Tooltip';


export default function IconbarComponent() {
    return (
        <div className='flex justify-center items-center gap-2 text-white h-10 p-1'>
            <Tooltip title={"Calender"}>
                <EventIcon className="border-2 cursor-pointer border-slate-300 rounded-lg h-full w-fit p-1" onClick={() => { }} />
            </Tooltip>
            <Tooltip title={"Messages"}>
                <ChatIcon className="border-2 cursor-pointer border-slate-300 rounded-lg h-full w-fit p-1" onClick={() => {  }} />
            </Tooltip>
            <Tooltip title={"Log out"}>
                <LogoutIcon className="border-2 cursor-pointer border-slate-300 rounded-lg h-full w-fit p-1" onClick={() => {}} />
            </Tooltip>
        </div>
    )
}
