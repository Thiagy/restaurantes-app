import React, { useState } from 'react';

const Card = ({ item, quantity, setTotalSum, totalSum, setItemTotal }) => {

    const[price, setPrice]=useState(item.price)
    const[quant, setQuant]=useState(quantity)

    //Função que permite adicionar mais 1 item ao carrinho.
    const addCart = (item) => {

        const existingCart = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];

        const newItem = { ...item }
      
        let unityPrice = parseFloat(newItem.price) / parseInt(quantity);
        
        newItem.price = parseFloat(unityPrice.toFixed(2))
      
        existingCart.push(newItem);
      
        totalSum = parseFloat(totalSum)

        setQuant((prevQuant) => prevQuant + 1);

        setPrice((prevPrice) => prevPrice + unityPrice);

        setItemTotal(existingCart.length)

        setTotalSum(totalSum + unityPrice);

        localStorage.setItem('listItemMenuCart', JSON.stringify(existingCart));

    };
    
    //Função que permite remover mais 1 item do carrinho.
    const removeCart = (item) => {

        const existingCart = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];

        const newListItem = existingCart.findIndex(i=> i._id === item._id)

        existingCart.splice(newListItem, 1)

        const newItem = { ...item };
    
        let unityPrice = parseFloat(newItem.price) / parseInt(quantity);
        
        newItem.price = parseFloat(unityPrice.toFixed(2))

        setQuant((prevQuant) => prevQuant - 1 );

        setPrice((prevPrice) => parseFloat((prevPrice - unityPrice).toFixed(2)));

        setItemTotal(existingCart.length)

        setTotalSum(totalSum - unityPrice);

        localStorage.setItem('listItemMenuCart', JSON.stringify(existingCart));

    };

    //Função que permite remover todos items de mesmo id.
    const removeAllItem = (item) => {

        const existingCart = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];

        const newListItem = existingCart.filter(i=> i._id!==item._id)

        let totalSum = newListItem.reduce((sum, item) => sum + item.price, 0);

        setItemTotal(newListItem.length)

        setTotalSum(parseFloat(totalSum.toFixed(2)));

        localStorage.setItem('listItemMenuCart', JSON.stringify(newListItem));

    }

    return quant > 0 ? (
        <div className="card flex w-96 justify-between mb-2 p-1 rounded-xl relative border border-solid border-black">
        <i
            className="fa-solid fa-trash-can trash-icon absolute top-1 right-1 cursor-pointer"
            onClick={() => {
             removeAllItem(item);
            }}
        ></i>
        <div className="h-32 w-1/2 rounded-xl">
            <img className="h-full w-full rounded-xl" src={item.image} alt={item.image} />
        </div>
        <div className="p-3 flex flex-col w-1/2 justify-center gap-1">
            <h4>{item.name}</h4>
            <span>{price.toFixed(2)}</span>
            <div className="flex justify-center gap-2 px-2 w-14">
            <div
                onClick={() => {
                addCart(item);
                }}
                className="flex justify-center items-center rounded-full h-5 w-5 cursor-pointer border-2 border-solid border-red-600"
            >
                <i className="fa-solid fa-plus"></i>
            </div>
            <span>{quant}</span>
            <div
                onClick={() => {
                removeCart(item);
                }}
                className="flex justify-center items-center rounded-full h-5 w-5 cursor-pointer border-2 border-solid border-red-600"
            >
                <i className="fa-solid fa-minus"></i>
            </div>
            </div>
        </div>
        </div>
    ) : null;

};

export default Card;
