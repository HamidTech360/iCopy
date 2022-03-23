import React from 'react';
import {Link} from 'react-router-dom'
import { Divider } from '@material-ui/core';
import '../css/card.css'

const Card = ({data}) => {
    return ( 
        <div className="service-card">
           
            <div className="service-img-box">
                <img src={`${data.filename}`} alt="placeholder" className="service-imgs" />
            </div>
            <div className="service-text">
                <div className="service-text-bold text-center"> {data.title }</div>
                <div className="service-text-light text-center">
                    {data.body?.substr(0, 150)}... 
                </div>
            </div>
            
            <Divider/>
            <Link to={`/blog/${data._id}`} style={{textDecoration:'none'}}>
            <div className="service-footer text-center">
                    <div className="learn-more-service">learn more</div>
            </div>
            </Link>
        </div>
     );
}
 
export default Card;