import React from 'react';
import { Divider } from '@material-ui/core';
import './css/card.css'

const Card = () => {
    return ( 
        <div className="main-service-card">
            <div className="main-card-header text-center">
                COPYWRITING
                <div className="small-card-header text-center">$700 <span className="per-month">/ Month</span> </div>
            </div>
           
            
            <Divider/>

            <div className="card-list-items text-center">
                <div className="card-list-item">Sales page copy </div>
                <div className="card-list-item">Sales letters</div>
                <div className="card-list-item">Email copy (Newsletter and E-commerce) </div>
                <div className="card-list-item">Landing page copy</div>
                <div className="card-list-item">PPC Ads </div>
                <div className="card-list-item">Social media copy</div>
                <div className="card-list-item">Storyselling</div>
            </div>
            <Divider/>
            <div className="text-center">
                <button className=" get-started-btn" id="main-service-copywriting-btn">GET STARTED <i className="fa fa-arrow-right"></i> </button>
            </div>
        </div>
     );
}
 
export default Card;