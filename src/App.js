import { useState, useEffect, useCallback } from 'react';
import { Routes, Route} from 'react-router-dom'
import getUniqueItems from './components/functions/getUniqueItems';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Home from './components/Home';
import Cart from './components/Cart'

import './App.css'

export default function App(){

  const[itemAdd, setItemAdd]=useState({})
  const[itemTotal, setItemTotal]=useState(0)
  const [totalSum, setTotalSum] = useState(0);
  const [cartList, setCartList] = useState([]);

  const[home, setHome]=useState(true)

  const loadCart = useCallback(() => {

    const storedCartList = JSON.parse(localStorage.getItem('listItemMenuCart')) || [];

    let totalSum = storedCartList.reduce((sum, item) => sum + item.price, 0);

    setCartList(getUniqueItems(storedCartList));
  
    setTotalSum(parseFloat(totalSum.toFixed(2)));

    setItemTotal(storedCartList.length)
    
  }, [setItemTotal, setTotalSum, setCartList]);
  
  useEffect(() =>{
    loadCart()
  }, [loadCart, setHome, itemTotal]);

  return (
    <>
      <Message 
        message={itemAdd}
      />
      <Header 
        itemTotal={itemTotal} 
        home={home} 
        setHome={setHome} 
        totalSum={totalSum}/>

      <Routes>
          <Route 
            path='/' 
            element={<Home 
                        setItemAdd={setItemAdd} 
                        setItemTotal={setItemTotal} 
                        totalSum={totalSum}
                        setTotalSum={setTotalSum}
            />}/>
          <Route 
            path='/cart' 
            element={<Cart 
                        setHome={setHome} 
                        itemTotal={itemTotal} 
                        setItemTotal={setItemTotal}
                        totalSum={totalSum}
                        setTotalSum={setTotalSum}
                        cartList={cartList}
                        setCartList={setCartList}
                        />}/>
      </Routes>
      <Footer/>
    </>
  );
}


