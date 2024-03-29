import React, {useState, useEffect} from 'react';
import Header from '../home/components/header';
import Banner from './components/banner'
import Services from './components/service';
import Footer from '../../components/footer/footer';

const EmailMarketing = () => {

    const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{ 
        
        setTimeout(()=>{
            setPreloader(false)
          },1000)
         // window.scrollTo(0,0)
    },[])

    if(preloader){
        return(
          <div class="preloader"></div>
        )
      }

    return ( 
        <div className="emailMarketing">
            <Header/>
            <Banner/>
            <Services/>
            <Footer/>
        </div>
     );
}
 
export default EmailMarketing;