'use client'

import React, { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip from '@mui/material/Tooltip';

export default function Profilebar() {
  const [login, setLogin] = useState(false);

  return (
    <div className="h-full text-inherit font-semibold box-border flex justify-center items-center ">
      {login ? (
        <Tooltip title={"User"}>
          <PermIdentityIcon className="border-2 cursor-pointer border-slate-300 rounded-lg h-full w-fit p-1" onClick={()=>{setLogin(false)}}/>
        </Tooltip>
      ) : (
        <Tooltip title={"Log in"}>
          <LoginIcon className="border-2 cursor-pointer border-slate-300 rounded-lg h-full w-fit p-1" onClick={()=>{setLogin(true)}}/>
        </Tooltip>
      )}
    </div>
  );
}
