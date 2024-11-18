import React, { useEffect } from 'react'
import { useState} from 'react'


export default function Todo() {
    const [ todo,setTodo]= useState("")
    const [ todos,setTodos]= useState([])
    const[showFinished,setshowFinished]=useState(true)
    
    useEffect(()=>{
      let todoString = localStorage.getItem("todos")
      if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

    },[])

    const saveTodo = ()=>{
      localStorage.setItem("todos",JSON.stringify(todos))

    }
  const toggleFinished =(e)=>{
setshowFinished(!showFinished)

  }
    const handleEdit = (e,id)=>{ 
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo); 
    
    let newTodos = todos.filter((item) => item.id !== id); 
    setTodos(newTodos);
    saveTodo()
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
    saveTodo()
      
    }
    
    const handleAdd = ()=>{
      setTodos([...todos,{id:Date.now(),todo,isCompleted:false}])
      setTodo("")
      saveTodo()
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
    saveTodo()
      
    }
    
  return (
    <>
  
   <div className='container  mx-96 my-5 rounded-xl p-3 bg-green-200  min-h-[80vh] w-1/2'>
     <div className='add Todo my-5 mx-10'>
       <h2 className='text-lg font-bold'>
         Add your Todo
       </h2>
       <input onChange={handleChange} value ={todo} type = "text" className='w-96'/>
      
       <button onClick ={handleAdd} disabled ={todo.length<=3} className='bg-green-500 hover:bg-green-400 p-3 py-1 text-white text-sm font-bold rounded-lg mx-6'>Add+</button>
     </div><div className='mx-10'>
     <input type="checkbox" onChange={toggleFinished} checked = {showFinished} />ShowFinished</div>
       <h2 className='text-lg font-bold mx-10 my-4'> Your Todos</h2>
       <div className='todo'>
         {todos.length===0 && <div className='mx-56 my-2'>There are not todo task to display</div>}
         { todos?.map((item ,index)=>{
         
          return(showFinished ||!item.isCompleted) &&  <div key={item.id} className='todo flex' >
           <div className='flex'>
             
     <input name={item.id} type='checkbox' className='mx-10' id='' checked={item.isCompleted} onChange={handleCheck}/>
          <div className={item.isCompleted?"text-red-700":""}  >
            {item.todo}</div></div>
             <div className='buttons flex mx-32' >
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
 

