import React from 'react'
import { SERVICES } from '../assets/dataSlide'

export default function Services() {
  return (
    <div className='flex gap-[10%] flex-col '>
        <div className='flex justify-center'>
        <h1 className='text-6xl  mt-[8%] font-serif text-[#071952] py-[3%]'>Services</h1>

        </div>
        
        <div className='flex flex-col items-center text-[#071952]'>
        {
        SERVICES.map((serv)=>(
            <div className='flex flex-col '>
                <h1 className=''>{serv.title}</h1>
                <p className='text-[11px]'>{serv.desc}</p>
            </div>
        ))
        
      }
        </div>
  
    </div>
  )
}
