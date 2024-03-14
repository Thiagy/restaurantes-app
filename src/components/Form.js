import { useState } from 'react'

import {saveItem} from './functions/menuApi.js'
import readFileAsBase64 from './functions/readFileAsBase64.js'

export default function Form(){

    const[name, setName]=useState('')
    const[price, setPrice]=useState('')
    const[imageFile, setImageFile]=useState('')

    const insertItem = async ()=>{

        const image = await readFileAsBase64(imageFile, 300, 300, 1.0)

        const item = {
            name,
            price,
            image
        }

        await saveItem(item)

    }

    return(

        <div className='flex justify-center items-center h-screen w-full fixed top-0 backdrop-blur-5 bg-black bg-opacity-60'>
            <form className="h-1/2 w-1/2 flex flex-col justify-center items-center gap-3">
                <div>
                    <label>Nome</label>
                    <input onChange={(e) => setName(e.target.value)} type='text' />
                </div>
                <div>
                    <label>Preço</label>
                    <input onChange={(e) => setPrice(e.target.value)} type='number' />
                </div>
                <div>
                    <label>Image</label>
                    <input onChange={(e) => setImageFile(e.target.files[0])} type='file' />
                </div>
                <button onClick={insertItem} className='bg-red-600 p-3 rounded-xl'>Adicionar</button>
            </form>
        </div>
    )
}