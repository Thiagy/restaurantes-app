import Hero from './Hero';
import Reservation from './Reservation';
import Menu from './Menu';
import OurChef from './OurChef';
import MainMenu from './MainMenu';
import Location from './Location';

export default function Home({setItemAdd, setItemTotal, totalSum, setTotalSum}){

    return(
        
        <>
            <Hero/>

            <Menu 
                setItemAdd={setItemAdd} 
                setItemTotal={setItemTotal} 
                totalSum={totalSum}
                setTotalSum={setTotalSum}
            />
            <OurChef/>
            <MainMenu 
                setItemAdd={setItemAdd} 
                setItemTotal={setItemTotal} 
                totalSum={totalSum}
                setTotalSum={setTotalSum}
            />

            <Reservation/>
            <Location/>
        </>

    )

}