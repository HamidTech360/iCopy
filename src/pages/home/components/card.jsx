import React from 'react'
import { Fab } from '@material-ui/core';
import './css/card.css'

const Card = ({icon, header, details}) => {
    return ( 
        <div className="Card text-center">
            {/* <img className="card-imgs" src={`../../../assets/${img}`} alt="cardimg"  /> */}
            <Fab style={{height:'70px', width:'70px', marginBottom:'30px'}}>
                <i className={`fa ${icon} fa-2x` } style={{color:'#db891d'}}></i>
            </Fab>

            <div className="card-heading">{header}</div>
            <div className="card-details">{details}</div>
             <button className="card-btn">Get Started</button>
        </div>
     );
}
 
export default Card;