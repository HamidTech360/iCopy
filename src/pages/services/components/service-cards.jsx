import React from 'react';
import Card from './card'
import Zoom from 'react-reveal'

import '../css/service-cards.css'

const ServiceCards = () => {
    return ( 
        <div className="service-cards">
            <div className="row">
                <Zoom duration={1000} clear>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <Card
                        heading="CopyWritting"  
                        text='Shoot your revenue to the sky with sizzling storyselling Sales Copy, Emails, VSLs, and Landing Page Copy.'
                        link="/copywritting"
                        />
                    </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                     <Card
                         heading="EMAIL MARKETING"  
                         text='Get the best out of your subscribers with Clear-cut email strategies and optimization with different email services providers.'
                         link="/emailmarketing"
                     />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="SEO"  
                         text='Let your website pages be the regular pages that annoy everyone because of constant visibility and many-time clicks.'
                         link="/seo"
                    />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="Content Writing "  
                         text='Engage your audience with mouthwatering content on your website in the form of Blog Post, Brochure, Case Studies, Press Release and White Papers.'
                         link="/contentwritting"
                    />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="Lead Generation "  
                         text='Fill your pipe with engaging prospects..'
                         link="/contentwritting"
                    />
                </div>
                </Zoom>
            </div>
        </div>
     );
}
 
export default ServiceCards;