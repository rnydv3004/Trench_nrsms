import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Searchcomponent from './Searchcomponent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
    return (
        <div className='min-h-14 w-screen text-white overflow-hidden bg-slate-800 p-3 flex justify-between items-center border-b-2 gap-2 border-slate-500'>
            <MenuIcon className='border-2 border-white rounded-lg h-full w-fit p-1 cursor-pointer' />
            <div className='flex justify-center items-center gap-2 h-full'>

                {/* SEARCH */}
                <Searchcomponent />

                {/* MESSAGE */}
                <Tooltip title={"Message"}>
                    <ChatIcon className='border-2 border-slate-300 rounded-lg h-full w-fit p-1 cursor-pointer' />
                </Tooltip>

                {/* NOTIFICATION */}
                <Tooltip title={"Message"}>
                    <NotificationsIcon className='border-2 border-slate-300 rounded-lg h-full w-fit p-1 cursor-pointer' />
                </Tooltip>
            </div>
        </div>
    );
}
