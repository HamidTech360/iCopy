import React, {useState, useEffect} from 'react';
import Header from '../home/components/header';
import ServiceBanner from './components/banner';
import ServiceCards from './components/service-cards';
import Footer from '../../components/footer/footer';

const Services = () => {
    const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{ 
        
        setTimeout(()=>{
            setPreloader(false)
          },700)
         // window.scrollTo(0,0)
    },[])

    if(preloader){
        return(
          <div className="preloader"></div>
        )
      }
    return ( 
        <div className="services">
            <Header/>
            <ServiceBanner/>
            <ServiceCards/>
            <Footer/>
        </div>
     );
}
 
export default Services;