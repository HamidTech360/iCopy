import React from 'react'
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './css/card.css'

const Card = ({icon, header, details, link}) => {
    return ( 
        <div className="Card text-center">
            {/* <img className="card-imgs" src={`../../../assets/${img}`} alt="cardimg"  /> */}
            <Fab style={{height:'70px', width:'70px', marginBottom:'30px'}}>
                <i className={`fa ${icon} fa-2x` } style={{color:'#db891d'}}></i>
            </Fab>

            <div className="card-heading">{header}</div>
            <div className="card-details">{details}</div>
             <Link to={link}><button className="card-btn">Get Started</button></Link>
        </div>
     );
}
 
export default Card;