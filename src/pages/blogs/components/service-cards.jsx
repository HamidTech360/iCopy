import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {apiUrl} from '../../../config.json'
import Card from './card'
import Zoom from 'react-reveal'

import '../css/service-cards.css'

const ServiceCards = () => {

    const [data, setData] = useState([])
    useEffect(()=>{
       async function getPosts (){
            try{
                const response = await axios.get(`${apiUrl}/upload/post`)
                console.log(response.data.data);
                setData(response.data.data)
            }catch(ex){
                console.log(ex.response?.data);
            }
        }
        getPosts()
    },[])

    return ( 
        <div className="service-cards">
            <div className="row">
                {data.map((item, i)=>
                <Zoom duration={1000} clear>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <Card
                            data={item}
                        />
                    </div>
                </Zoom>
                )}
                

                {/* <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                     <Card
                         heading="EMAIL MARKETING"  
                         text='Get the best out of your subscribers with Clear-cut email strategies and optimization with different email services providers.'
                         link="/emailmarketing"
                         img="bg3.jpg"
                     />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="SEO"  
                         text='Let your website pages be the regular pages that annoy everyone because of constant visibility and many-time clicks.'
                         link="/seo"
                         img="bg4.jpg"
                    />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="Content Writing "  
                         text='Engage your audience with mouthwatering content on your website in the form of Blog Post, Brochure, Case Studies, Press Release and White Papers.'
                         link="/contentwriting"
                         img="bg2.jpg"
                    />
                </div>
                </Zoom>

                <Zoom duration={1000} clear>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Card
                         heading="Affiliate Marketing "  
                         text='Fill your pipe with engaging prospects..'
                         link="/contentwritting"
                         img="bg3.jpg"
                    />
                </div>
                </Zoom> */}
            </div>
        </div>
     );
}
 
export default ServiceCards;