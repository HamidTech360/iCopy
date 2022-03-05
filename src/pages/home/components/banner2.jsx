import React from 'react'
import './css/banner2.css'
const Banner2 = () => {
    const text = `
    "Extraordinary professional! It has been an honor working with Tajudeen. He's deliberate and conscious with his copywriting skills with great attention to every detail. He also has the ability to self-manage all our email marketing activities and keep our projects going no matter my availability or the lack thereof. Tajudeen puts his heart and soul into his work. He gives you everything he's got. I am humbled to have worked with him and I'm definitely coming back for him for more projects. Thank you, Tajudeen." Ed Parmentier

" Tajudeen is a great writer and works with attention to detail." 
 
    `
    return ( 
        <div className="banner2 text-center">
            <div className="banner2-medium">I'M AN EXPERT</div>
            <div className="banner2-bold">What my clients say</div>
            <div className="banner-2-light" style={{whiteSpace:'pre-line'}}>
                    {text}
            </div>
            
            <img src="../../../assets/client.jpg" alt="client" className="client-img" />
         
            <div className="client-name-box">
               <button className="btn-client-underline"></button> <span className="client-name">HamidTech</span> <button className="btn-client-underline"></button>
            </div>
          
        </div>
     );
}
 
export default Banner2;