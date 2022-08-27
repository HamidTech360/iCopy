import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import EndlessCarousel from '../../../components/carousel'
import data from '../../../helpers/carouselTexts'
import './css/banner2.css'
const Banner2 = () => {
   

    
    return ( 
        <div className="banner2 text-center">
            <div className="banner2-medium">I'M AN EXPERT</div>
            <div className="banner2-bold">What my clients say</div>
            <EndlessCarousel  >
                {data.map((slide, i)=>
                    <div >
                        <div className="banner-2-light" style={{whiteSpace:'pre-line'}}>
                                {slide.text}
                        </div>
                        
                        <img src={`../../../assets/${slide.clientImg}`} alt="client" className="client-img" />
                    
                        <div className="client-name-box">
                        <button className="btn-client-underline"></button> <span className="client-name">{slide.clientName}</span> <button className="btn-client-underline"></button>
                        </div>
                    </div>
                )}
            </EndlessCarousel>
            
          
        </div>
     );
}
 
export default Banner2;