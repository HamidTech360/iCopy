import React from 'react';
import './css/details.css'

const Details = () => {

    const text= `
    We get it. 

    You are trying so hard to raise your business to the moon. And by doing so, you just hired a 'guru' to help you craft a bulldozing sales letter, emails, and some ads. 
    
    But they've not been converting as they should. 
    
    Now you are looking for another 'guru' to help you get the job done. 
    
    Well, lemme simplify the logic to you. 
    
    There are many copywriters out there, but only few are really killing it for their clients. 
    
    Why?
    
    This is so because writing sales copy, email and Ads that grab attention, hooks emotion, and pushes customers to take action isn't a walk in the park. 
    
    Your audience has become wiser. Old COPY strategy don't do the trick anymore. 
    
    You need to awaken your audience's emotions with hooks that touch, stories that relate, and CTA that drives them to action.
    
     And we can help you do just that.
    
    `
    return ( 
        <div className="main-service-details">
            <div className="service-bold">Dear buisness builder !!</div>
            <div className="service-light">
                <div className="text-1">
                    {text}
                </div>
                <button className=" get-started-btn" id="main-service-copywriting-btn">Hit This Damn Button Now!</button>
            </div>
           <div className="stepBystep">
                <div className="stepBystep-header">Step By Step On How We Will Hit Gold With Your Project:</div>
                <div className="stepBystep-bold">Phase 1: Discerning</div>
                <div className="service-light" id="stepBystep-light">
                    The first phase is the discerning phase where I get to know two things about you: Your life and your business. I want to really build a relationship with you. After a bit about your life (Your wife, kids, pet, and other things), then we begin with all details of your business—your campaign,
                    ICP, website, and everything that needs to be known.
                </div>

                <div className="stepBystep-bold">Phase 2: Orchestrating</div>
                <div className="service-light" id="stepBystep-light">
                After the problem has been discern, next is the second phase. Here, I take all the resources I might have asked beforehand about your business to 
                fashion out some possible solution after painstaking research of your product, target audience, and industry. Also, I will prepare a quote, electronic agreement, and a 50% deposit invoice.
                </div>

                <div className="stepBystep-bold">Phase 3: Conjuring</div>
                <div className="service-light" id="stepBystep-light">
                This is where I work my magic. I will create a blueprint, first draft, and constant ping you with updates. We can communicate through phone, email, Slack, 
                or any other platform that you’re comfortable with.
                </div>

                <div className="stepBystep-bold">Phase 4: Editing </div>
                <div className="service-light" id="stepBystep-light">
                Here, I seldom go past a single edits with my clients (Yeah, I'm so that good). I put so much into my work. This is the stage when I clean up the copy and implement any ideas you have to make the campaign reflect your goals.
                </div>

                <div className="stepBystep-bold">Phase 5: Lucre! Dough! Money! </div>
                <div className="service-light" id="stepBystep-light">
                After my wand has done all the magic, you press the publish button and watch before yours eyes how money falls on you. The copy goes boom! You are being restless because of the massive sales going on. And don't be surprised if 
                the president asks you to be his special guest
                </div>

                <div className="stepBystep-bold">Phase 6: Testing.  </div>
                <div className="service-light" id="stepBystep-light">
                With the campaign a raging success (and it will be), I write variations of the controls to keep pushing the limit. This helps you and I generate more revenue when we discover winning combinations. Optional but recommended
                </div>
           </div>
           <button className=" get-started-btn" id="main-service-copywriting-btn">Hit This Damn Button Now!</button>
        </div>
     );
}
 
export default Details;