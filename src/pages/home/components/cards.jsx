import React from 'react'
import Card from './card';
import './css/card.css'

const Cards = () => {
    return ( 
        <div className="cards row">
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 card-box">
                <Card 
                    icon="fa-codepen" 
                    link="copywriting"
                    header="Copy Writing" 
                    details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab iusto
                            reiciendis possimus debitis modi sit omnis facilis iste praesentium."
                 />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 card-box">
                <Card 
                        icon="fa-empire" 
                        link="seo"
                        header="SEO OptimiZation" 
                        details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab iusto
                                reiciendis possimus debitis modi sit omnis facilis iste praesentium."
                    />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 card-box">
                <Card 
                        icon="fa-superpowers"
                        link="emailmarketing" 
                        header="Email Marketing" 
                        details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab iusto
                                reiciendis possimus debitis modi sit omnis facilis iste praesentium."
                    />
            </div>
        </div>
     );
}
 
export default Cards;