import React from 'react';
import {Link} from 'react-router-dom'
import { Divider } from '@material-ui/core';


const Card = ({img, heading, text, link}) => {
    return ( 
        <div className="service-card">
           
            {/* <div className="service-img-box">
                <img src={`../../../assets/${img}`} alt="placeholder" className="service-imgs" />
            </div> */}
            <div className="service-text">
                <div className="service-text-bold text-center"> {heading }</div>
                <Divider/>
                <div className="service-text-light text-center">
                    {text} 
                </div>
            </div>
            
            {/* <Divider/>
            <Link to={link} style={{textDecoration:'none'}}>
            <div className="service-footer text-center">
                    <div className="learn-more-service">learn more</div>
            </div>
            </Link> */}
        </div>
     );
}
 
export default Card;