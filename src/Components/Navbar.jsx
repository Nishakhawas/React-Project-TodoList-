import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menu,setMenu]=useState("Home");

  return (
    <nav className='flex justify-between bg-green-400 py-4 text-white'>
        <div className='"logo'>
            <span className='font-semibold text-xl mx-8'>Tasklist</span>

        </div> 
        <ul className='flex gap-8 mx-9 '>
            <li  className='cursor-pointer py-1 hover:font-bold' onClick= {()=>{setMenu("home")}}> <Link style={{textDecoration:'none'}} to ='/'>Home</Link>{menu==="home"}</li>
            <li className='cursor-pointer py-1 hover:font-bold' onClick= {()=>{setMenu("your task")}}> <Link style={{textDecoration:'none'}} to ='/yourtasks'>TodoTask</Link>{menu==="your task"}</li>
            <li className='cursor-pointer py-1 hover:font-bold' onClick= {()=>{setMenu("your task")}}> <Link style={{textDecoration:'none'}} to ='/api'>APIS</Link>{menu==="your task"}</li>
            <li className='cursor-pointer  bg-green-800 hover:bg-green-900 p-2 py-1 m-0 text-white font-bold rounded-xl mx-6 ' onClick= {()=>{setMenu("your task")}}> <Link style={{textDecoration:'none'}} to ='/login'>Login</Link>{menu==="your task"}</li>
        </ul>
       
    </nav>
  )
}
