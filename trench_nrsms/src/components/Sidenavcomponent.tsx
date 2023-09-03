import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Tooltip } from '@mui/material';
import IconbarComponent from './IconbarComponent';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WcIcon from '@mui/icons-material/Wc';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ReportIcon from '@mui/icons-material/Report';
import PaymentIcon from '@mui/icons-material/Payment';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ClassIcon from '@mui/icons-material/Class';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BoyIcon from '@mui/icons-material/Boy';

const menuItems = [
    { icon: <SpaceDashboardIcon className='h-full' />   , text: 'Dashboard' },
    { icon: <AssignmentIndIcon className='h-full' />    , text: 'Staff' },
    { icon: <BoyIcon className='h-full' />              , text: 'Students' },
    { icon: <WcIcon className='h-full' />               , text: 'Parents' },
    { icon: <AutoStoriesIcon className='h-full' />      , text: 'Subjects' },
    { icon: <ClassIcon className='h-full' />            , text: 'Class' },
    { icon: <AssignmentIcon className='h-full' />       , text: 'Exams' },
    { icon: <EmojiEventsIcon className='h-full' />      , text: 'Competition' },
    { icon: <EmailIcon className='h-full' />            , text: 'Applications' },
    { icon: <ReportIcon className='h-full' />           , text: 'Complaints' },
    { icon: <PaymentIcon className='h-full' />          , text: 'Fees & Payments' },
];


export default function Sidenavcomponent() {

    return (
        <div className='flex flex-col h-[calc(100vh-3.5rem)] bg-slate-800 w-64 p-2 pb-0 border-r-2'>

            {/* School Deatils */}
            <header className='bg-blue-100 h-12 w-full rounded-lg flex justify-center items-center p-2 gap-4'>
                <Tooltip title="X Y Z Public School">
                    <div className='flex items-center gap-1'>
                        <div className='bg-white p-1 rounded-lg h-full  hover:text-white w-1/5 flex justify-center items-center'>
                            <SchoolIcon className='h-full hover:text-white w-full text-slate-700' />
                        </div>
                        <div className='h-full  hover:text-white w-full flex justify-start items-center'>
                            <h3 className='font-bold text-xs leading-3 flex-wrap text-slate-700'>X Y Z National Public School</h3>
                        </div>
                    </div>
                </Tooltip>
                <div className='bg-white w-fit h-fit rounded-lg p-1'>
                    <UnfoldMoreIcon className='w-fit h-4 text-blue-600 bg-white transition-transform transform hover:scale-150' />
                </div>
            </header>

            <label className='text-slate-400 text-xs font-bold m-2'>
                GENERAL
            </label>

            {/* Navigation Menu */}
            <nav className='px-2 cursor-pointer text-black text-base font-semibold w-full bg-slate-00 mb-2 rounded-lg overflow-y-scroll overflow-x-hidden'>
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <li
                            key={index}
                            className='group flex flex-start items-center gap-4 hover:bg-white text-white hover:text-slate-800 p-2 rounded-r-full'
                        >
                            <span className='group-hover:scale-125 transition-transform transform ease-in-out duration-300'>{menuItem.icon}</span>
                            <span className='text-sm'>{menuItem.text}</span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <footer className='border-t-2 h-11 w-60 flex justify-center items-center '>
                <IconbarComponent />
            </footer>
        </div >
    )
}
