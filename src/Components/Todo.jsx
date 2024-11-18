import React from 'react'
import { useState } from 'react'


export default function Todo() {
    const [ todo,setTodo]= useState("")
    const [ todos,setTodos]= useState([])
  
    const handleEdit = (e,id)=>{ 
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo); 
    
    let newTodos = todos.filter((item) => item.id !== id); 
    setTodos(newTodos);
    }
    
    const handleDelete = (e,id)=>{ 
      // console.log(`The id is ${id}`)
      let index = todos.findIndex((item) => {
       return item.id === id
      })
        console.log(index)
    
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
   
    setTodos(newTodos);
      
    }
    
    const handleAdd = ()=>{
      setTodos([...todos,{id:Date.now(),todo,isCompleted:false}])
      setTodo("")
      console.log("todos")
  
      
    }
    const handleChange = (e)=>{
      setTodo(e.target.value)
      
    }
    const handleCheck = (e)=>{
     
      console.log(e, e.target);
    
    let id = parseInt(e.target.name);
    console.log(`The id is ${id}`);
    
    let index = todos.findIndex((item) => item.id === id);
    // if (index === -1) {
    //   console.error(`Todo with id ${id} not found`);
    //   return; 
    // }
    
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    
    console.log(newTodos, todos);
      
    }
    
  return (
    <>
  
   <div className='container max-w-screen-md mx-96 my-5 rounded-xl p-3 bg-green-200  min-h-[80vh]'>
     <div className='add Todo my-5 mx-10'>
       <h2 className='text-lg font-bold'>
         Add your Todo
       </h2>
       <input onChange={handleChange} value ={todo} type = "text" className='w-96'/>
      
       <button onClick ={handleAdd} className='bg-green-500 hover:bg-green-400 p-3 py-1 text-white text-sm font-bold rounded-lg mx-6'>Add+</button>
     </div>
       <h2 className='text-lg font-bold mx-10'> Your Todos</h2>
       <div className='todo'>
         {todos.length===0 && <div className='mx-56 my-2'>There are not todo task to display</div>}
         { todos?.map((item ,index)=>{
         
          return <div key={item.id} className='todo flex justify-between my-3' >
           <div className='flex gap-5'>
             
     <input name={item.id} type='checkbox'  id='' value={item.isCompleted} onChange={handleCheck}/>
          <div className={item.isCompleted?"text-red-700":""} >
            {item.todo}</div></div>
             <div className='buttons' >
               <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-green-500 hover:bg-green-400 p-3 py-1 text-white text-sm font-bold rounded-lg mx-2'>Edit</button>
               <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-green-500 hover:bg-green-400 p-3 py-1 text-white text-sm font-bold rounded-lg mx-2'>Delete</button>
               </div>
             </div>
             })
           }
            
           
  
 
         </div>
 
       </div>
     
    
     </>
   );
 }
 

