import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal'


import './css/banner.css'
const Banner = () => {
    return ( 
        <div className="banner1">
           
            <div className=" row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bn1-grid1 banner-grid">
                    {/* <div className="small-colored">Change your view of Copy writing</div> */}
                    <Zoom clear duration={3000}>
                        <div className="big-bold" id='big-bold-1'>Stories are Magnets that Automatically Attract <span className="big-bold-colored">prospects </span> </div>
                        <div className="big-bold" id="big-bold-2">to your <span className="big-bold-colored">Business</span> and put them in your hands.</div>
                    </Zoom>
                    <Zoom clear duration={1500}>
                        <div className="small-text">
                        Shall we help you sell them? <br />
                             I'm popularly known as the StoryMarketer <br />
                              
                        </div>
                    </Zoom>
                    <div className="banner-btns">
                       <Link to="/service">
                            <button className=" get-started-btn ">YES please <i className="fa fa-arrow-right"></i> </button>
                       </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bn1-grid2 ">
                    <img src="../../../assets/bg4.jpg" alt="banner" className="banner1-img" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;