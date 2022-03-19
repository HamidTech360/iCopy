import React from 'react';
import { Divider } from '@material-ui/core';
import './css/card.css'

const Card2 = () => {
    return ( 
        <div className="main-service-card">
            <div className="main-card-header text-center">
                Additional Services
                <div className="small-card-header text-center"> $2000 <span className="per-month">/ Month</span> </div>
            </div>
            <Divider/>
            <div className="card-list-items text-center">
                <div className="card-list-item">Copyediting </div>
                <div className="card-list-item">Copy audits </div>
                <div className="card-list-item">Proofreading  </div>
            </div>
            <Divider/>
            <div className="text-center">
                <button className=" get-started-btn" id="main-service-copywriting-btn">GET STARTED <i className="fa fa-arrow-right"></i> </button>
            </div>
        </div>
     );
}
 
export default Card2;