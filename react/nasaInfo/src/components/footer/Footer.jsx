import React, { useState } from 'react'
import { MdInfo } from "react-icons/md";
import SideBar from '../sidebar'
import classNames from 'classnames';

function Footer({ setOpen , open }) {
  return (
    <div className='absolute bg-transparent bottom-4 w-full flex items-center justify-between p-2'>
        <h1 className='text-4xl text-white p-4 tracking-widest'>The Mars Project</h1>
        <MdInfo className={ classNames('absolute text-4xl cursor-pointer text-white hover:animate-pulse bottom-7', {
            'right-1/2': open ,
            'right-4': !open,
        })} onClick={() => setOpen(!open)}/>
    </div>
  )
}

export default Footer