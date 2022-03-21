import React from 'react';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Card = () => {
    return ( 
        <div className="main-service-card">
            <div className="main-card-header text-center">
                Content Writing
                <div className="small-card-header text-center">$2000 <span className="per-month">/ Month</span> </div>
            </div>
           
            
            <Divider/>

            <div className="card-list-items text-center">
                <div className="card-list-item">Cryptocurrency & NFT </div>
                <div className="card-list-item">Press Release</div>
                <div className="card-list-item">White Paper </div>
                <div className="card-list-item">Articles/Blog Post</div>
                <div className="card-list-item">Case Studies </div>
                <div className="card-list-item">Brochure </div>
            </div>
            <Divider/>
            <div className="text-center">
                <Link to="/contact">
                    <button className=" get-started-btn" id="main-service-copywriting-btn">
                        GET STARTED <i className="fa fa-arrow-right"></i> 
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default Card;