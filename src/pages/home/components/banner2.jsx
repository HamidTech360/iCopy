import React from 'react'
import Carousel from 'react-bootstrap/carousel'
import './css/banner2.css'
const Banner2 = () => {
   

    const data = [
        {
            text:  `"Extraordinary professional! It has been an honor working with Tajudeen. He's deliberate and conscious with his copywriting skills with great attention to every detail. He also has the ability to self-manage all our email marketing activities and keep our projects going no matter my availability or the lack thereof. Tajudeen puts his heart and soul into his work. He gives you everything he's got. I am humbled to have worked with him and I'm definitely coming back for him for more projects. Thank you, Tajudeen." `,
            clientImg:'client.jpg',
            clientName:'Ed Parmentier'
        },

        {
            text:  `" Tajudeen is a great writer and works with attention to detail."`,
            clientImg:'client.jpg',
            clientName:'Medaweb'
        }
    ]
    return ( 
        <div className="banner2 text-center">
            <div className="banner2-medium">I'M AN EXPERT</div>
            <div className="banner2-bold">What my clients say</div>
            <Carousel>
                {data.map((slide, i)=>
                    <Carousel.Item style={{padding:'20px'}}>
                        <div className="banner-2-light" style={{whiteSpace:'pre-line'}}>
                                {slide.text}
                        </div>
                        
                        <img src={`../../../assets/${slide.clientImg}`} alt="client" className="client-img" />
                    
                        <div className="client-name-box">
                        <button className="btn-client-underline"></button> <span className="client-name">{slide.clientName}</span> <button className="btn-client-underline"></button>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
            
          
        </div>
     );
}
 
export default Banner2;