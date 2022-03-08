import React from 'react';
import Header from '../home/components/header';
import ServiceBanner from './components/banner';
import ServiceCards from './components/service-cards';

const Services = () => {
    return ( 
        <div className="services">
            <Header/>
            <ServiceBanner/>
            <ServiceCards/>
        </div>
     );
}
 
export default Services;