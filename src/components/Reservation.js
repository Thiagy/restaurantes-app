import React, { useState } from 'react';
import PetitGateau from './img/petit-gateau.jpeg';

export default function Reservation() {
  
  const gradiente = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${PetitGateau})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [customer, setCustomer] = useState({
    nome: '',
    email: '',
    celular: '',
    data: '',
    horario: '8:00 am',
    quantidadePessoas: '1 pessoa',
  });

  const [loading, setLoading] = useState(false);

  const enviarReservaParaBackend = async () => {

    try {

      setLoading(true);

      const response = await fetch('http://localhost:8080/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer)
      });

      if (response.ok) {

        console.log('Reserva enviada com sucesso!');
        setCustomer({
          nome: '',
          email: '',
          celular: '',
          data: '',
          horario: '8:00 am',
          quantidadePessoas: '1 pessoa',
        });
      } else {
        console.error('Erro ao enviar reserva para o backend.');
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  };

  return (

    <div id='reserva' className='relative flex flex-col items-center py-8'>

      <div className='backgroundCardReservation h-48 w-full' style={gradiente}>
        <h1 className='text-white text-4xl pt-7  text-center'>Reserva de mesas</h1>
      </div>

      <div className='boxCardReservation flex flex-wrap gap-8 justify-center absolute top-40 w-full'>

        <div className='cardReservation py-5 flex flex-col gap-4 justify-center items-center w-1/4 bg-white shadow-2xl rounded-xl'>
          <i className="fa-regular fa-envelope text-red-600"></i>
          <h2>Email</h2>
          <p>restaurante@gmail.com</p>
        </div>

        <div className='cardReservation py-5 flex flex-col gap-4 justify-center items-center w-1/4 bg-white shadow-2xl rounded-xl'>
          <i className="fa-solid fa-phone-flip text-red-600"></i>
          <h2>Celular</h2>
          <p>(62)996752272</p>
        </div>

        <div className='cardReservation py-5 flex flex-col gap-4 justify-center items-center w-1/4 bg-white shadow-2xl rounded-xl'>
          <i className="fa-solid fa-location-dot text-red-600"></i>
          <h2>Localização.</h2>
          <p>103 Centro, GO, Goiânia</p>
        </div>

      </div>

      <div className='w-2/3 text-center mt-28'>
        <h1 className='text-4xl text-red-600'>Reservando uma mesa</h1>
      </div>

      <form
        className='mt-5 mx-auto w-full flex flex-col justify-center items-center gap-2'
        onSubmit={(e) => {
          e.preventDefault();
          enviarReservaParaBackend();
        }}
      >

        <div className='boxInsertData flex flex-wrap justify-center items-center w-1/2'>

          <div className='insertData w-1/2 px-1 min-w-m-72'>
            <input
              type='text'
              name='nome'
              value={customer.nome}
              onChange={handleChange}
              className='w-full mb-4 py-1 px-4 bg-gray-100 rounded-lg shadow-sm shadow-gray-100'
              placeholder='Nome'
            />
            <input
              type='text'
              name='email'
              value={customer.email}
              onChange={handleChange}
              className='w-full mb-4 py-1 px-4 bg-gray-100 rounded-lg shadow-sm shadow-gray-100'
              placeholder='Email'
            />
            <input
              type='text'
              name='celular'
              value={customer.celular}
              onChange={handleChange}
              className='w-full mb-4 py-1 px-4 bg-gray-100 rounded-lg shadow-sm shadow-gray-100'
              placeholder='Celular'
            />
          </div>

          <div className='insertData w-1/2 px-1 min-w-m-72'>
            <input
              type='date'
              name='data'
              value={customer.data}
              onChange={handleChange}
              className='w-full mb-4 py-1 px-4 bg-gray-100 rounded-lg shadow-sm shadow-gray-100'
              placeholder='DD/MM/AAAA'
            />

            <select
              name='horario'
              value={customer.horario}
              onChange={handleChange}
              className='w-full mb-4 py-1 px-4 bg-gray-100 rounded-lg shadow-sm shadow-gray-100'
            >
              <option>8:00 am</option>
              <option>9:00 am</option>
              <option>10:00 am</option>
              <option>11:00 am</option>
              <option>12:00 am</option>
              <option>13:00 am</option>
              <option>14:00 am</option>
              <option>15:00 am</option>
            </select>
            <select
              name='quantidadePessoas'
              value={customer.quantidadePessoas}
              onChange={handleChange}
              className='w-full mb-4 py-1 px-4 bg-gray-100 rounded-lg shadow-sm shadow-gray-100'
            >
              <option>1 pessoa</option>
              <option>2 pessoa</option>
              <option>3 pessoa</option>
              <option>4 pessoa</option>
              <option>5 pessoa</option>
              <option>6 pessoa</option>
              <option>7 pessoa</option>
            </select>
          </div>

        </div>

        <button type='submit' className='bg-red-600 py-2 px-4 text-white rounded-xl' disabled={loading}>
            {loading ? 'Enviando...' : 'Agende agora'}
        </button>
      </form>
</div>
);
}
