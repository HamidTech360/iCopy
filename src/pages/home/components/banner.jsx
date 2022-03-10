import React from 'react'
import Fade from 'react-reveal/Fade'


import './css/banner.css'
const Banner = () => {
    return ( 
        <div className="banner1">
           
            <div className=" row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bn1-grid1 banner-grid">
                    {/* <div className="small-colored">Change your view of Copy writing</div> */}
                    <Fade bottom duration={2000}>
                        <div className="big-bold" id='big-bold-1'>Stories are Magnets that automatically attract prospects  </div>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <div className="big-bold" id="big-bold-2">to your Business and put them in your hands.</div>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <div className="small-text">
                            Shall we help you sell them?   
                        </div>
                    </Fade>
                    <div className="banner-btns">
                        <button className=" get-started-btn ">Get Started <i className="fa fa-arrow-right"></i> </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bn1-grid2">
                    <img src="./assets/banner-image2.png" alt="banner" className="banner1-img" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;