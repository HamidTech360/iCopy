import React from 'react';
import './css/logo.css'

const Logos = () => {
    return ( 
        <div className="logos text-center">
            <div className="logo-item">
                <img src="../../../assets/log3.jpg" alt="logo" className='logo-img' id="log1" />
            </div>

            <div className="logo-item">
                <img src="../../../assets/log4.jpg" alt="logo" className='logo-img' id="log2"/>
            </div>

            <div className="logo-item">
                <img src="../../../assets/log2.jpg" alt="logo" className='logo-img' id="log3" />
            </div>
        </div>
     );
}
 
export default Logos;