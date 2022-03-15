import React from 'react';
import Header from '../home/components/header';
import Banner from './components/banner';
import ServiceList from './components/service-list'

const Copywritung = () => {
    return ( 
        <div className="copywriting">
            <Header/>
            <Banner/>
            <ServiceList/>
        </div>
     );
}
 
export default Copywritung;