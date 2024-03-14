import { useState, useEffect } from 'react'

import Caren from './img/chefs/caren.jpg'
import John from './img/chefs/john.jpg'
import July from './img/chefs/july.jpg'

export default function OurChefs(){

    const[chefs, setChefs]=useState([])

    useEffect(()=>{

        const arrayChefs = [ 
            {name: "Caren", image: Caren},
            {name: "John", image: John},
            {name: "July", image: July},
        ]

        setChefs(arrayChefs)

    }, [])

    return(

        <div id='chefs' className='flex flex-col justify-center items-center'>
            <h1 className='md:text-2xl text-red-600 text-4xl mb-7'>Nossos Chefs</h1>
            <div className="flex justify-center items-center flex-wrap w-5/6">
                {chefs.map((item, index)=>{
                    
                    return(

                        <div key={index} className="flex flex-col w-80 justify-between mb-2 p-1">
                            <div className='h-44 w-full rounded-2xl'>
                                <img className='h-full w-full rounded-2xl' src={item.image} alt="" />
                            </div>
                            <div className='p-2 flex flex-col justify-center items-center gap-1'>
                                <h4>{item.name}</h4>
                                <div className="flex justify-center gap-1">
                                    <i className="fas fa-star text-red-600"></i>
                                    <i className="fas fa-star text-red-600"></i>
                                    <i className="fas fa-star text-red-600"></i>
                                    <i className="fas fa-star text-red-600"></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}