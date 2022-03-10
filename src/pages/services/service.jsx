import React from 'react';
import Header from '../home/components/header';
import ServiceBanner from './components/banner';
import ServiceCards from './components/service-cards';
import Footer from '../../components/footer/footer';

const Services = () => {
    return ( 
        <div className="services">
            <Header/>
            <ServiceBanner/>
            <ServiceCards/>
            <Footer/>
        </div>
     );
}
 
export default Services;