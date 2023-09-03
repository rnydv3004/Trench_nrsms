import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Icon, Tooltip } from '@mui/material';
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

export default function Sidenavcomponent() {

    return (
        <div className='flex flex-col w-64 p-2 pb-0 border-r-2'>

            {/* School Deatils */}
            <header className='bg-sky-100 h-12 w-full rounded-lg flex justify-center items-center p-2 gap-4'>
                <Tooltip title="X Y Z Public School">
                    <div className='flex items-center gap-1'>
                        <div className='bg-white p-1 rounded-lg h-full  hover:text-white w-1/5 flex justify-center items-center'>
                            <SchoolIcon className='h-full hover:text-white w-full text-slate-700' />
                        </div>
                        <div className='h-full  hover:text-white w-full flex justify-start items-center'>
                            <h3 className='font-bold text-base flex-wrap text-slate-700'>X Y  Public School</h3>
                        </div>
                    </div>
                </Tooltip>
                <div className='bg-white w-fit h-fit rounded-lg p-1'>
                    <UnfoldMoreIcon className='w-fit h-4 text-blue-600 bg-white transition-transform transform hover:scale-150' />
                </div>
            </header>

            <label className='text-slate-400 text-xs font-bold mt-1'>
                GENERAL
            </label>

            {/* Navigation Menu */}
            <nav className='px-2 text-black text-base font-semibold  flex-grow w-full bg-slate-00 mb-2 rounded-lg overflow-y-scroll overflow-x-hidden'>
                <ul>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <SpaceDashboardIcon className='h-full' />
                        <span className='text-sm'>Dashboard</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <AssignmentIndIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Staff</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <BoyIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Students</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <WcIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Parents</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <AutoStoriesIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Subjects</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <ClassIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Class</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <AssignmentIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Exams</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <EmojiEventsIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Competition</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <EmailIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Applications</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <ReportIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Complaints</span>
                    </li>
                    <li className='flex flex-start items-center gap-4 hover:bg-blue-600 text-blue-900 hover:text-white p-2 rounded-r-full'>
                        <PaymentIcon className='h-full  hover:text-white' />
                        <span className='text-sm'>Fees & Payments</span>
                    </li>
                </ul>
            </nav>

            {/* Footer */}
            <footer className='border-t-2 h-11 w-60 flex justify-center items-center '>
                <IconbarComponent />
            </footer>
        </div >
    )
}
