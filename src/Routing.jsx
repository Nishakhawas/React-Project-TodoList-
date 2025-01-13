import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Navbar from './Components/Navbar'
import Api from './Components/Api'




export default function Routing() {
  return (     
    <> 
    <Navbar/> 
    <Routes>
     <Route path="/" element={<Home/>}/>  
     <Route path="/yourtasks" element={<Todo/>} />  
     <Route path="/api" element={<Api/>} />  
      
     </Routes>
     
     </>
     
       
    
  )
}
