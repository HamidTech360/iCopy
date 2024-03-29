import React, {useState, useEffect} from 'react';
import Header from '../home/components/header';
import ContentBanner from './components/banner';
import ServiceList from './components/services'
import Footer from '../../components/footer/footer';

const ContentWriting = () => {

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
        <div className="content-writing">
            <Header/>
            <ContentBanner/>
            <ServiceList/>
            <Footer/>
        </div>
     );
}
 
export default ContentWriting;