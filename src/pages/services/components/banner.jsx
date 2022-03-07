import React from 'react';


const ServiceBanner = () => {
    return ( 
        <div className="about-banner">
            <div className=" row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bn1-grid1 banner-grid" >
                    
                    <div className="big-bold about-bold">
                        SERVICES
                        
                    </div>
                    <button className="about-line"></button>
                    <div className="small-text">
                        <div>Hey there</div>   
                        <div>Explore my services</div> 
                    </div>
                    <div className="banner-btns">
                        <button className=" get-started-btn ">Explore <i className="fa fa-arrow-right"></i> </button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default ServiceBanner;