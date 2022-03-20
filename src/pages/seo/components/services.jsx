import React from 'react';
import Card from './card'
import Zoom from 'react-reveal'



const ServiceCards = () => {
    return ( 
        <div className="service-cards">
            <div className="row">
                <Zoom duration={1000} clear>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <Card
                        heading="SEO Web Page"  
                        text='Rank your websites with engaging Web copy that rank for product/service keywords or other target phrases.'
                        link="/copywriting"
                        img="bg2.jpg"
                        />
                    </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                     <Card
                         heading="SEO Blog Posts"  
                         text='Get content that boost rankings, drive organic traffic to your website,  and also generate engaging leads when aligned with a proper funnel.'
                         link="/emailmarketing"
                         img="bg3.jpg"
                     />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="Backlink Building"  
                         text=' Build strong backlinks like guest posting that boost authority, traffic, and rankings'
                         link="/seo"
                         img="bg4.jpg"
                    />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="SEO and content audits"  
                         text='Analyze all of your website’s nooks and crannies to find what’s wrong and what can be improved.'
                         link="/contentwriting"
                         img="bg2.jpg"
                    />
                </div>
                </Zoom>

               
            </div>
        </div>
     );
}
 
export default ServiceCards;