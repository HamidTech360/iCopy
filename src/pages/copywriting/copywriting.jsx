import React, {useState, useEffect} from 'react';
import Header from '../home/components/header';
import Banner from './components/banner';
import ServiceList from './components/service-list'
import Details from './components/details';
import Footer from '../../components/footer/footer';

const Copywritung = () => {
    const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{ 
        
        setTimeout(()=>{
            setPreloader(false)
          },1000)
         // window.scrollTo(0,0)
    },[])

    if(preloader){
        return(
          <div className="preloader"></div>
        )
      }
    return ( 
        <div className="copywriting">
            <Header/>
            <Banner/>
            <ServiceList/>
            <Details/>
            <Footer/>
        </div>
     );
}
 
export default Copywritung;