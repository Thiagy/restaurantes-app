import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/logo-2.jpg';

export default function Header({ itemTotal, home, setHome, totalSum }) {

  const [widthScreen, setWidthScreen] = useState(false);

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {

    const header = document.querySelector('header');

    const handleResize = () => {
      setWidthScreen(header.offsetWidth <= 700);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const backgroundHeader = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(5px)',
  };

  return (
    <header style={backgroundHeader} className='py-2 px-5 flex justify-between items-center fixed top-0 w-full z-10'>

      <Link to='/'>
        <div onClick={() => setHome(true)} className='h-14 w-14 rounded-full border-t border-solid border-black'>
          <img className='rounded-full w-full h-full' src={Logo} alt='' />
        </div>
      </Link>

      <nav 
        className="menuHeader flex items-center gap-4" 

        style={{ 

          flexDirection: home && !widthScreen ? 'row' : 'column', 
          position: home && !widthScreen ? 'static' : 'fixed',
          top: home && !widthScreen ? '' : '0',
          right: home && widthScreen && openMenu ? '0' : '-330px',
          paddingTop: home && !widthScreen ? '' : '60px',
          backgroundColor: home && !widthScreen ? '' : 'rgba(0, 0, 0, 0.9)',
          paddingBottom: home && !widthScreen ? '' : '20px',
          width: home && !widthScreen ? 'auto' : '330px',
          transition: '1s'

        }}>

        <a 
          style={{
            border: openMenu? '1px solid white':'',
            width: openMenu? '90%': 'auto',
            borderRadius: openMenu? '8px':'5px',
            textAlign: 'center'
          }} 
          href="#home" 
          className="text-red-600">
            Home
        </a>
        <a 
          style={{
            border: openMenu? '1px solid white':'',
            width: openMenu? '90%': 'auto',
            borderRadius: openMenu? '8px':'5px',
            textAlign: 'center'
          }} 
          href="#menu" 
          className="text-red-600">
            Menu
        </a>
        <a 
          style={{
            border: openMenu? '1px solid white':'',
            width: openMenu? '90%': 'auto',
            borderRadius: openMenu? '8px':'5px',
            textAlign: 'center'
          }} 
          href="#chefs" 
          className="text-red-600">
            Chefs
        </a>
        <a 
          style={{
            border: openMenu? '1px solid white':'',
            width: openMenu? '90%': 'auto',
            borderRadius: openMenu? '8px':'5px',
            textAlign: 'center'
          }} 
          href="#chicken" 
          className="text-red-600">
            Refeições
        </a>
        <a 
          style={{
            border: openMenu? '1px solid white':'',
            width: openMenu? '90%': 'auto',
            borderRadius: openMenu? '8px':'5px',
            textAlign: 'center'
          }} 
          href="#reserva" 
          className="text-red-600">
            Reserva
        </a>
        <a 
          style={{
            border: openMenu? '1px solid white':'',
            width: openMenu? '90%': 'auto',
            borderRadius: openMenu? '8px':'5px',
            textAlign: 'center'
          }} 
          href="#location" 
          className="text-red-600">
            Localização
        </a>
      </nav>

      <nav className='flex gap-5'>

          <div className='flex gap-2' style={{ display: home && itemTotal > 0 ? 'flex' : 'none' }}>

            <div style={{ marginBottom: '1px' }} className='flex flex-col'>
              <span className='text-white text-sm'>{itemTotal} itens</span>
              <span className='text-white text-sm'>R$: {totalSum.toFixed(2)}</span>
            </div>

            <Link to='/cart' onClick={() => setHome(false)}>
              <i className="fa-solid fa-cart-shopping text-red-600 text-xl cursor-pointer"></i>
            </Link>

          </div>

          <div 
            className='box-menu' 
            style={{ 
              display: home && widthScreen ? 'flex' : 'none', 
              position: home && widthScreen ? 'relative' : 'static'
            }}

              onClick={()=>{setOpenMenu(!openMenu)}}
            >

            <div 
              style={{
                position: openMenu? 'absolute':'',
                transform: openMenu? 'rotate(45deg)':'',
                transition: '1s'
            }} 
              className='litle-bar'></div>
            <div 
              style={{
                display: openMenu? 'none':'block'
            }} 
              className='litle-bar'></div>
            <div 
              style={{
                position: openMenu? 'absolute':'',
                transform: openMenu? 'rotate(-45deg)':'',
                transition: '1s'
                
            }} 
              className='litle-bar'></div>

          </div>

      </nav>
    </header>
  );
}
