import React from 'react';
import { Divider } from '@material-ui/core';
import '../css/card.css'

const Card = ({img, heading, text, link}) => {
    return ( 
        <div className="service-card">
           
            <div className="service-img-box">
                <img src="../../../assets/placeholder2.jpg" alt="placeholder" className="service-imgs" />
            </div>
            <div className="service-text">
                <div className="service-text-bold text-center">CopyWritting</div>
                <div className="service-text-light text-center">
                    Shoot your revenue to the sky with sizzling storyselling Sales Copy, Emails, VSLs, and Landing Page Copy. 
                </div>
            </div>
            
            <Divider/>
            <div className="service-footer text-center">
                    <div className="learn-more-service">learn more</div>
            </div>
        </div>
     );
}
 
export default Card;