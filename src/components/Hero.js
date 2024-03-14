import { useState, useEffect } from 'react';
import ImageHero from './img/main.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Hero() {

  useEffect(() => {

    const initializeAos = () => {

      Aos.init({ duration: 5000 });
      
    };
  
    initializeAos();

  }, []);

  const gradiente = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${ImageHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const transitionText = {
        transition: '3s'
  }

  const [number, setNumber]=useState(0)
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {

    const images = [

      { title: 'Nigiri de Salmão', text: 'Delicie-se com a frescura do nosso Nigiri de Salmão, onde a suculência do salmão encontra a perfeição do arroz temperado. Uma explosão de sabor em cada mordida.' },
      { title: 'Tempurá de Camarão', text: 'Mergulhe na crocância irresistível do nosso Tempurá de Camarão. O contraste de texturas e o sabor marinho dos camarões farão você desejar mais.' },
      { title: 'Sashimi de Atum', text: 'Experimente a elegância simples do Sashimi de Atum. Fatias finas de atum fresco que derretem na boca, revelando a verdadeira essência do sabor.' },
      { title: 'Uramaki Filadélfia', text: 'Renda-se à indulgência do nosso Uramaki Filadélfia. O equilíbrio perfeito entre o cremoso queijo filadélfia e o sabor delicado do salmão.' },
      { title: 'Yakitori de Frango', text: 'Saboreie o charme defumado do nosso Yakitori de Frango. Espetinhos suculentos de frango grelhado, uma verdadeira delícia para os amantes de sabores intensos.' },
      { title: 'Sopa Miso', text: 'Aqueça sua alma com a Sopa Miso. Uma combinação reconfortante de caldo de peixe, miso e ingredientes frescos que fazem desta sopa uma experiência única.' },
      { title: 'Gyoza de Porco', text: 'Desfrute da explosão de sabor do nosso Gyoza de Porco. Uma mistura irresistível de carne de porco suculenta e a textura crocante da massa.' },
      { title: 'Tataki de Salmão', text: 'Surpreenda-se com o Tataki de Salmão. Salmão levemente grelhado por fora, mantendo a suculência no interior, realçado por um toque de molho especial.' },
      { title: 'Rolinho Primavera', text: 'Aprecie a crocância e a variedade de sabores do nosso Rolinho Primavera. Um festival de vegetais frescos e proteína que vai encantar o seu paladar.' }

    ];

    setInterval(()=>{

      if(number < images.length - 1){

        setNumber(number+1)
      } else {

        setNumber(0)
      }

    }, 10000)

    setTitle(images[number].title);
    setText(images[number].text);
  }, [number, setNumber]);


  return (

    <section id='home' style={gradiente} className='h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center relative z-0'
    >
        <div className='boxHero w-2/3'>
        <h1 
          className='title text-white text-4xl my-4 p-3' 
          data-aos="zoom-in">
          {title}
        </h1>
          <p style={transitionText} className='textHero text-white w-2/3 p-3' data-aos="zoom-in" >{text}</p>
        </div>
    </section>

  )


}
