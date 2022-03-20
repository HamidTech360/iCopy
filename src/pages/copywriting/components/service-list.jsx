import React from 'react';
import Card from './card';
import Card2 from './card2';
import './css/servicelist.css'

const ServiceList = () => {
    return ( 
        <div className="service-list">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 service-list-grid">
                    <Card/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 service-list-grid">
                    <Card2/>
                </div>
                
            </div>
           
        </div>
     );
}
 
export default ServiceList;