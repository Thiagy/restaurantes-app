import Image1 from './img/slide/1.jpg'
import Image2 from './img/slide/2.jpg'
import Image3 from './img/slide/3.jpg'
import Image4 from './img/slide/4.jpg'
import Image5 from './img/slide/5.jpg'
import Image6 from './img/slide/6.jpg'
import Image7 from './img/slide/7.jpg'
import Image8 from './img/slide/8.jpg'
import Image9 from './img/slide/9.jpg'

export default function Slider({setTitle, setText}) {

    const boxSlide = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        border: '1px solid white',
        height: '140px',
        width: '54%',
        padding: '10px',
        bottom: '20px',
        overflowX: 'hidden',
        margin: '0 auto',

    }

    const slide = {
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        transition: '1s',
        padding: '0 28px'
    }

    
    

    function sliderManual(item){

        setTitle(item.title)
        setText(item.text)

    }

  return ( 
    <div style={boxSlide}>
        <div style={slide}>
            {images.map((item, index)=>{ 
                return(
                    <div 
                        key={index} 
                        onClick={()=>sliderManual(item)}
                        className='w-28 h-28 rounded-full cursor-pointer transform hover:scale-110 border-2 border-solid border-red-600 transition-transform duration-800'>
                        <img 
                            className='rounded-full h-full w-full' 
                            src={item.img}  
                            alt={`item ${index.title}`}
                        />
                    </div>

                )

                })
            }
        </div>
    </div>
  );
}

