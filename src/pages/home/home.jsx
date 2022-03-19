import React, {useEffect, useState} from 'react'
import Banner from './components/banner'
import OurService from './components/ourservice'
import Cards from './components/cards'
import Banner2 from './components/banner2'
import Portfolio from './components/portfolio'
import ContactMe from './components/contactMe'
import Header from './components/header'
import Logos from './components/logos'
import Footer from '../../components/footer/footer'


import './components/css/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './components/css/home.css'



const Home = ()=>{
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

    return(
        <div className="home-wrapper">
             <Header/>
            <Banner/>
            <OurService/>
            {/* <Logos/> */}
            <Banner2/>
            <Cards/>
            {/* <Portfolio/> */}
            {/* <ContactMe/> */}
            <Footer/>
        </div>
    
    )}
export default Home;