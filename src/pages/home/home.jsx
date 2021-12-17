import React, {useEffect, useState} from 'react'
import Banner from './components/banner'
import OurService from './components/ourservice'
import Cards from './components/cards'
import Banner2 from './components/banner2'

import './components/css/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
const Home = ()=>{
    const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{
        
        setTimeout(() => {
            setPreloader(false)
        }, 200);
    },[])

    // if(preloader){
    //     return (
    //      <div className="preloader-box text-center">
    //         <ReactLoading 
    //             type="bars"
    //             color="#C84C5B"
    //             height={100}
    //             width={100}
             
    //         />
    //      </div>
    //     )
    // }

    return(
        <div className="home-wrapper">
            <Banner/>
            <OurService/>
            <Cards/>
            <Banner2/>
        </div>
    
    )}
export default Home;