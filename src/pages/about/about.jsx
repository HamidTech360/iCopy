import React, {useState, useEffect} from 'react';
import Header from '../home/components/header';
import AboutBanner from './components/banner';
import AboutText from './components/about-text';
import Footer from '../../components/footer/footer';
import Banner2 from '../home/components/banner2';

const About = () => {

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
        <div className="about">
             <Header/>
             <AboutBanner/>
             <AboutText/>
             <Banner2/>
             <Footer/>
        </div>
     );
}
 
export default About;