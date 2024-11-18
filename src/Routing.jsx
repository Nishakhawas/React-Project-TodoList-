import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Navbar from './Components/Navbar'




export default function Routing() {
  return (     
    <> 
    <Navbar/> 
    <Routes>
     <Route path="/home" element={<Home/>}/>  
     <Route path="/yourtasks" element={<Todo/>} />  
      
     </Routes>
     
     </>
     
       
    
  )
}
