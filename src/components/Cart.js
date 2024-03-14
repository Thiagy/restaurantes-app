import React, { useState, useEffect} from 'react';
import generationQrcodePixApi from './functions/pixApi';
import Card from './Card';

export default function Cart({setHome, itemTotal, setItemTotal, totalSum, setTotalSum, cartList, setCartList}) {

  const [qrcode, setQrcode] = useState(false);
  const [qrcodeImage, setQrcodeImage] = useState('');
  
  const [customer, setCustomer] = useState({
    cpf: '',
    nome: '',
  });
  

  const heightScreen = {
    height: '550px',
    width: '70%',
    margin: '0 auto',
    overflowY: 'auto'
  };
  
  const generationQrcodeCss = {
    display: qrcode ? 'flex':'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  };

  const closeQrcode = {
    position: 'absolute',
    top: '15px',
    right: '15px',
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };
    
  useEffect(() =>{
    setHome(false)
  }, [setHome]);

  async function generationQrcode() {

    const object = {
        cpf: customer.cpf,
        nome: customer.nome,
        original: toString(totalSum)
    };
    
    const { imagemQrcode} = await generationQrcodePixApi(object)

    if(imagemQrcode){

      setQrcodeImage(imagemQrcode)
      setQrcode(true)
    }

  }

  return (
    <main>
        <div style={heightScreen} className='card-box flex justify-center items-center flex-wrap gap-4 pt-24'>
          {cartList.length === 0 ? (
            <h2>O carrinho está vazio.</h2>
          ) : (
            cartList.map((item, index) => (
              <Card key={index} item={item} quantity={item.quantity} setTotalSum={setTotalSum} totalSum={totalSum} setItemTotal={setItemTotal} setCartList={setCartList} cartList={cartList}/>
            ))
          )}
        </div>
        <div className="shopping-details-box flex">

          <div className="shopping-details w-1/2 p-6">
              <h3 className='mb-4 text-red-600 te'>Digite seus dados</h3>
              <form action="">
                <div className='py-1 px-5'>
                  <label htmlFor="name-customer"className='mr-2'>Nome:</label>
                  <input type="text" id="name-customer" className='py-1 px-2 rounded-lg' name="nome" placeholder="Nome" onChange={handleInputChange} />
                </div>
                <div className='py-1 px-5'>
                  <label htmlFor="cpf-customer"className='mr-2'>CPF:</label>
                  <input type="text" id="cpf-customer" className='py-1 px-2 rounded-lg' name="cpf" placeholder="ex: 012345678909" onChange={handleInputChange} />
                </div>

              </form>

              <button 
                className="mt-5 py-2 px-4 bg-red-600 rounded-lg text-white"
                onClick={generationQrcode}
              >Efetue o pagamento com pix
              </button>

          </div>
          <div className="shopping-details w-1/2 p-6">
              <h3 className='mb-4 text-red-600 te'>Detalhes da compra</h3>
              <div id="details-order">
                  <div className='py-1 px-5'>
                      <span style={{color: 'black'}} id="total-quantity-product">Quantidade de produtos:{itemTotal}</span>
                  </div>
                  <div className='py-1 px-5'>
                      <span style={{color: 'black'}}>Total a pagar: {totalSum.toFixed(2)}</span>
                  </div>
              </div>
          </div>

        </div>
        <div style={generationQrcodeCss}>
            <div style={closeQrcode} onClick={()=>setQrcode(false)}>
                <i style={{color: 'white'}} className="fa-solid fa-x"></i>
            </div>
            <p style={{color: 'white'}}>Efetue o pagamento com o aplicativo do seu banco.</p>
            <div id="div-qrcode">
                <img src={qrcodeImage} id="qrcode-image" alt="" />
            </div>
        </div>
    </main>
  );
  
}
