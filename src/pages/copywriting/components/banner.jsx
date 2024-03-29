import React from 'react';
import './css/banner.css'

const Banner = () => {
    return ( 
        <div className="copy-banner">
             <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12  copywriting-banner-grid" >
                    
                    <div className="big-bold copywritting-bold">
                        ICopyStory CopyWriting Services
                        
                    </div>
                    <button className="about-line"></button>
                    <div className="about-small-text">
                        <div>Hey there</div>   
                        <div>Meet The StoryMarketer</div> 
                    </div>
                    <div className="banner-btns">
                        <button className=" get-started-btn ">Get Started <i className="fa fa-arrow-right"></i> </button>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 bn1-grid2 hideOnMobile">
                    <img src="../../../assets/bg2.jpg" alt="banner" className="banner1-img" />
                </div>
            </div>
            
        </div>
     );
}
 
export default Banner;