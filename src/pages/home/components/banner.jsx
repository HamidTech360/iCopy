import React from 'react'


import './css/banner.css'
const Banner = () => {
    return ( 
        <div className="banner1">
           
            <div className=" row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 bn1-grid1 banner-grid">
                    <div className="small-colored">Change your view of Copy writing</div>
                    <div className="big-bold">Rank Your Buisness With Copy Writing</div>
                    <div className="small-text">
                        Stories are magnet that automatically attract prospect to your buisness and put them in our hands    
                    </div>
                    <div className="banner-btns">
                        <button className=" get-started-btn ">Get Started <i className="fa fa-arrow-right"></i> </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 bn1-grid2">
                    <img src="./assets/banner-image2.png" alt="banner" className="banner1-img" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;