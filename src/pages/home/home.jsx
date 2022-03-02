import React, {useEffect} from 'react'
import Banner from './components/banner'
import OurService from './components/ourservice'
import Cards from './components/cards'
import Banner2 from './components/banner2'
import Portfolio from './components/portfolio'
import ContactMe from './components/contactMe'
import Header from './components/header'
import Logos from './components/logos'
import './components/css/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
const Home = ()=>{
    // const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{ 
        window.scrollTo(0,0)
    },[])

 

    return(
        <div className="home-wrapper">
             <Header/>
            <Banner/>
            <OurService/>
            {/* <Logos/> */}
            <Cards/>
            <Banner2/>
            <Portfolio/>
            <ContactMe/>
        </div>
    
    )}
export default Home;