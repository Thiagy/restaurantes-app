import CafeDaManha from './img/mainmenu/cafe-da-manha-de-hotel.webp'
import Almoco from './img/mainmenu/almoco.webp'
import Jantar from './img/mainmenu/jantar.jpeg'

import { getItemsBreakFast, getItemsLunch, getItemsDinner} from './functions/menuApi'
import { useState, useEffect } from 'react'

export default function MainMenu({setItemAdd, setItemTotal, totalSum, setTotalSum}){

    const backgroundImageCafe = {

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${CafeDaManha})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    
    };

    const backgroundImageAlmoco = {

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${Almoco})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    
    };

    const backgroundImageJantar = {

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${Jantar})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    
    };

    const[breakfast, setBreakfast]=useState([])
    const[lunch, setLunch]=useState([])
    const[dinner, setDinner]=useState([])

    const addCart = (item) => {

        const existingCart = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];

        setItemTotal(existingCart.length + 1)
      
        const newItem = { ...item };
      
        newItem.price = parseFloat(newItem.price.toFixed(2));
      
        existingCart.push(newItem);

        setTotalSum(totalSum+newItem.price)
      
        setItemAdd(newItem);
      
        localStorage.setItem('listItemMenuCart', JSON.stringify(existingCart));
      
        setTimeout(() => {

          setItemAdd({});

        }, 3000);

    };

    useEffect(() => {
        const fetchDataBreakfast = async () => {
          try {
            const breakfastArray = await getItemsBreakFast();
            setBreakfast(breakfastArray);
          } catch (error) {
            console.error('Erro ao obter dados do breakfast:', error);
          }
        };
      
        fetchDataBreakfast();
    }, [breakfast]); 

    useEffect(() => {

        const fetchDataLunch = async () => {

          try {

            const arrayLunch = await getItemsLunch();

            setLunch(arrayLunch);

          } catch (error) {

            console.error('Erro ao obter dados do lunch:', error);

          }

        };
      
        fetchDataLunch();

    }, [lunch]); 

    useEffect(() => {

        const fetchDataDinner = async () => {

          try {

            const arrayDinner = await getItemsDinner();

            setDinner(arrayDinner);

          } catch (error) {

            console.error('Erro ao obter dados do lunch:', error);

          }

        };
      
        fetchDataDinner();

    }, [dinner]); 
      
    return(

        <div id='chicken' className='flex flex-col justify-center items-center py-10'>

            <span className='text-2xl text-red-600'>Cozinha</span>

            <h1 className='text-4xl mb-7'>Nossas refeições.</h1>

            <div className="flex flex-col gap-2 justify-center items-center min-w-80 w-2/3">

                <div className='flex justify-center items-center gap-3 flex-wrap'>

                <div style={backgroundImageCafe} className='coffe h-44 w-40 flex justify-center items-center rounded-xl'>

                    <p className='text-center mt-5 text-white'>Café</p>

                </div>

                <div className="boxMainMenu flex justify-center items-center flex-wrap gap-3">

                    {breakfast.map((item, index)=>{

                        return(
                            <div className="cardCofe flex flex-col h-44 w-36" key={index}>

                                <div className='cardImageCoffe h-30 w-full rounded-2xl'>
                                    <img className='h-full w-full rounded-2xl' src={item.image} alt={item.name} />
                                </div>

                                <div className='cardTextCoffe flex flex-col justify-center items-center'>

                                    <h4>{item.name}</h4>

                                    <div className="flex justify-center gap-1">
                                        <i className="fas fa-star text-red-600 text-xs"></i>
                                        <i className="fas fa-star text-red-600 text-xs"></i>
                                        <i className="fas fa-star text-red-600 text-xs"></i>
                                        <i className="fas fa-star text-red-600 text-xs"></i>
                                    </div>

                                    <div className='flex justify-between px-2 w-full'>

                                        <span className='text-xl'>{item.price}</span>

                                        <div onClick={()=>addCart(item)} className='flex justify-center items-center rounded-full h-5 w-5 cursor-pointer border-2 border-solid border-red-600'> 
                                            <i className="fa-solid fa-plus"></i> 
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>

                </div>

                <div className='flex justify-center items-center gap-3 flex-wrap'>

                    <div style={backgroundImageAlmoco} className='coffe h-44 w-40 flex justify-center items-center rounded-xl'>

                        <p className='text-center mt-5 text-white'>Almoço</p>

                    </div>

                    <div className="boxMainMenu flex justify-center items-center flex-wrap gap-3">

                        {lunch.map((item, index)=>{

                            return(
                                <div className="cardCofe flex flex-col h-44 w-36" key={index}>

                                    <div className='cardImageCoffe h-30 w-full rounded-2xl'>
                                        <img className='h-full w-full rounded-2xl' src={item.image} alt={item.name} />
                                    </div>

                                    <div className='cardTextCoffe flex flex-col justify-center items-center'>

                                        <h4>{item.name}</h4>

                                        <div className="flex justify-center gap-1">
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                        </div>

                                        <div className='flex justify-between px-2 w-full'>

                                            <span className='text-xl'>{item.price}</span>

                                            <div onClick={()=>addCart(item)} className='flex justify-center items-center rounded-full h-5 w-5 cursor-pointer border-2 border-solid border-red-600'> 
                                                <i className="fa-solid fa-plus"></i> 
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className='flex justify-center items-center gap-3 flex-wrap'>

                    <div style={backgroundImageJantar} className='coffe h-44 w-40 flex justify-center items-center rounded-xl'>

                        <p className='text-center mt-5 text-white'>Jantar</p>

                    </div>

                    <div className="boxMainMenu flex justify-center items-center flex-wrap gap-3">

                        {dinner.map((item, index)=>{
                            return(
                                <div className="cardCofe flex flex-col h-44 w-36" key={index}>

                                    <div className='cardImageCoffe h-30 w-full rounded-2xl'>
                                        <img className='h-full w-full rounded-2xl' src={item.image} alt={item.name} />
                                    </div>

                                    <div className='cardTextCoffe flex flex-col justify-center items-center'>

                                        <h4>{item.name}</h4>

                                        <div className="flex justify-center gap-1">
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                            <i className="fas fa-star text-red-600 text-xs"></i>
                                        </div>

                                        <div className='flex justify-between px-2 w-full'>

                                            <span className='text-xl'>{item.price}</span>

                                            <div onClick={()=>addCart(item)} className='flex justify-center items-center rounded-full h-5 w-5 cursor-pointer border-2 border-solid border-red-600'> 
                                                <i className="fa-solid fa-plus"></i> 
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>

    )

}