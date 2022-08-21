import React from 'react';
import Header from '../home/components/header';
import PortfolioHeader from './components/portfolio';
const Portfolio =  () =>{
    return (
        <div style={{backgroundColor:'#eff6f2', height:'fit-content'}}>
            <Header/>
            <PortfolioHeader/>
        </div>
    );
}

export default Portfolio;