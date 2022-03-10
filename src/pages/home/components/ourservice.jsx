import React from 'react'
import './css/ourservice.css'
const OurService = () => {

    const text1=`
        Have you been wondering why your subscribers have been a bit shy of your products lately? 
        Or you feel you haven't actually hit the right chords in persuading your subscribers to buy your products and services? 
        
        I think we have the PERFECT solution for you! 
    `
    const text2=`   
    My name is Tajudeen Yusuf, and I'm popularly known as the StoryMarketer.  
    I help businesses market their products by telling relatable stories, historical events, trending news, unforgettable movie scenes, relevant anecdotes, witty sayings and proverbs, etc primarily through the medium of email and other copy formats.
    `
    const serviceText = `
    But why STORYSELLING, you ask? 
    
    Stories, since inception, have been used to sell millions of products to prospects because they work.  
    Here's the truth you don't know:
    Your potential clients won't buy if you list only reasons why they should buy from you. You can only sell to them SUCCESSFULLY when their emotion is fully CHARGED and they can relate with your
    And to invoke their emotions, you need to take them to the moon with relatable stories. 
    This is because when your clients are basking in their emotional state, they are more likely to take action, remember, and connect with you and your products. 
    
    Now here are some questions for you:
    
    When last did you connect with your email list? 
    Do you feel a genuine connection between you and your subscribers?
    What kind of email do you send to them—are they emotionally-laden and persuasive? What's the frequency…daily, weekly, or monthly? 
    Is your sales page worthy of persuading your prospects to buy from you? 
    Does your website have what it takes to pass the Google test in order to rank high? 
    
    All these questions and more are what you need to address to get the Ultimate attention and response from your prospects.   
    And we can help you all you ever want with the help of  STORYSELLING. 
    
    Would you like to sell more than you've ever sold with the aid of STORYSELLING?
    
    `
    return ( 
        <div className="our-service" id="service">
            <div className="Badge alert-warning">Shall we help you sell your stories</div>
            <div className="service-bold">Hello buisness builder !!</div>
            <div className="service-light">
                <div className="text-1">
                    {text1}
                </div>
                <div className="alert-warning text-2">
                     {text2}             
                </div>
                <div className="text3">
                    {serviceText}
                </div>
            </div>
        </div>
     );
}
 
export default OurService;