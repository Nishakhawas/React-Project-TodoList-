import React, { useEffect, useState } from 'react'
import { getApi,getCategories } from '../Apis/api'

export default function Api() {
    const[api,setApi] = useState([])
    const[category,setCategory] = useState([])
    useEffect(()=>{
        // console.log("your api")
        document.title="api"
        getApi()
        .then((res)=>{
            setApi(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
    console.log(api)

    useEffect(()=>{
      document.title="categories"
      getCategories()
      .then((res)=>{
        setCategory(res)

    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <div className='w-full mx-28 '>
    <div className='flex flex-wrap justify-center my-20 gap-8 '> 
    
      {
        category?.map((item,index)=>(
          <div key={index}>
        <img src={item.image} alt=""  className=' h-56 '/>
            </div>

        ))
      }
    </div>
    </div>
    <div className='flex justify-center font-black text-green-600  text-3xl'>"We have following product"</div>
    <div className=' flex flex-wrap justify-center gap-20 my-20 '>    
      {
        api?.length > 0 && api.slice(0,10).map((item,index)=>(
            <div key ={index} className='grid'>

                    <img src={item.images} alt="" className='h-64' />
                    <span className='font-semibold'>#PRODUCT ID{item.id}</span>
                   <span className='hover:text-green-600 cursor-pointer'> {item.title}</span>
                



            </div>

        ))
      }
    </div>
    </>
  )
}
