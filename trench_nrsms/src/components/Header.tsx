import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Searchcomponent from './Searchcomponent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
    return (
        <div className='h-14 w-screen text-blue-600 overflow-hidden bg-white p-3 flex justify-between items-center border-b-2 gap-2'>
            <MenuIcon className='border-2 border-slate-300 rounded-lg h-full w-fit p-1' />
            <div className='flex justify-center items-center gap-2 h-full'>
                <Searchcomponent />
                <Tooltip title={"Message"}>
                    <ChatIcon className='border-2 border-slate-300 rounded-lg h-full w-fit p-1' />
                </Tooltip>
                <Tooltip title={"Message"}>
                    <NotificationsIcon className='border-2 border-slate-300 rounded-lg h-full w-fit p-1' />
                </Tooltip>
            </div>
        </div>
    );
}
