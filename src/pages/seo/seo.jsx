import React, {useState, useEffect} from 'react';
import Header from '../home/components/header';
import SeoBanner from './components/banner';
import ServiceCards from './components/services';
import Footer from '../../components/footer/footer';

const SEO = () => {
    const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{ 
        
        setTimeout(()=>{
            setPreloader(false)
          },700)
         // window.scrollTo(0,0)
    },[])

    if(preloader){
        return(
          <div class="preloader"></div>
        )
      }
    return ( 
        <div className="services">
            <Header/>
            <SeoBanner/>
            <ServiceCards/>
            <Footer/>
        </div>
     );
}
 
export default SEO;