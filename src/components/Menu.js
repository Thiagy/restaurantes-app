import { useState, useEffect } from 'react'
import { getItemsMenu } from './functions/menuApi' 

export default function Menu({setItemAdd, setItemTotal, totalSum, setTotalSum}) {

    const widthMenu={
        width:'320px',
        borderRadius: '12px',
        border: '1px solid black'
    }

    const[menu, setMenu]=useState([])

    const addCart = (item) => {

        const existingCart = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];

        setItemTotal(existingCart.length + 1)
      
        const newItem = { ...item };
      
        newItem.price = parseFloat(newItem.price.toFixed(2));
      
        setTotalSum(totalSum+newItem.price)

        existingCart.push(newItem);
      
        setItemAdd(newItem);
      
        localStorage.setItem('listItemMenuCart', JSON.stringify(existingCart));
      
        setTimeout(() => {

          setItemAdd({});

        }, 3000);

    };
      
    useEffect(() => {

        const fetchData = async () => {

            try {
                const menuArray = await getItemsMenu();

                setMenu(menuArray);

            } catch (error) {
                
                console.error('Erro ao obter dados do menu:', error);
            }
        };
    
        fetchData();

        const existingCart = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];
        setItemTotal(existingCart.length)

    }, [setItemTotal]);
    

  return (

    <div id='menu' className='flex flex-col justify-center items-center py-6 px-5'>
        <h1 className='mb-7 text-red-600 text-4xl'>cardápio</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap w-5/6">
            {menu.map((item, index)=>{
                return(
                    <div style={widthMenu} key={index} className="flex justify-between mb-2 p-1">
                        <div className='h-32 w-36 rounded-xl'>
                            <img className='h-full w-full rounded-xl' src={item.image} alt={item.image} />
                        </div>
                        <div className='p-3 flex flex-col justify-center items-center gap-1'>
                            <h4 style={{fontSize:'16px'}}>{item.name}</h4>
                            <div className="flex justify-center gap-1 w-28">
                                <i className="fas fa-star text-red-600"></i>
                                <i className="fas fa-star text-red-600"></i>
                                <i className="fas fa-star text-red-600"></i>
                                <i className="fas fa-star text-red-600"></i>
                            </div>
                            <span>{item.price}</span>
                            <button onClick={()=>addCart(item)} className='w-32 py-1 px-3 rounded-xl bg-red-600 text-white'>Order now</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

