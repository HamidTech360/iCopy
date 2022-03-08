import React from 'react';
import Card from './card'

import '../css/service-cards.css'

const ServiceCards = () => {
    return ( 
        <div className="service-cards">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                     <Card/>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <Card/>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceCards;