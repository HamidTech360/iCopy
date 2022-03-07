import React from 'react'

const AboutText = () => {

        const serviceText = `
        That's cool. But before you read any further, lemme quickly push this disclaimer forward:

    This page is solely ABOUT ME! As you read further, you will continually see a lot of self-aggrandizement and pomposity I exude. 
    If you don't have the gut to handle my kind, quickly backstep before reading further. 
    If you don't, you might fall off the cliff of calmness and plunge into an abyss of continual hiss and frown. 
    But if you have the stomach to stomach my pride, I guess you're in for a very short haul of pomposity and puffiness. 
    So, let's quickly get down to the person I wanna become. 

    *******

    My name is Tajudeen Yusuf, and I'm known as the StoryMarketer. 
    You probably haven't heard about me, and I don't think you should. 
    But lemme quickly tell you a secret you should know about me! But first, promise me you would keep your lips tight on this. 

    Now bring your right ear closer. 
    (in whispers) Listen! I'm about to become a world class Copywriter!

    What! Did you just chuckle at that? 

    NO! NO! NO! 
    This is no joke. And I mean every bit of it. 

    Well, if you really and truly don't believe what I just said, I promise I won't make any effort to convince you. 
    This is because when I become a world class, either you work with me or not, you will surely regret one of two ways:
    It's either you regret not working with me at all or you regret not working with me more. 
    Because two things will surely happen when I become world class:

    I will become VERY EXPENSIVE in months to come. 
    I will be VERY SCARCE to take on many projects. 
    This means when I become so high on fees, I will only take on high-end projects. 

    Wait… 
    I know many objections are running through your mind right now:
    "Duurrh! You are a Nigerian. I don't think that can take you anywhere" 
    "A non-native speaker going brutish on himself with non-native English. 

    "You don't even have past records to show how competent you are" 

    "Who the hell are you?" 

        
        `
    return ( 
        <div className="our-service" id="service">
            <div className="Badge alert-warning">Wanna know more about me? </div>
            <div className="service-bold">Hey there! !!</div>
            <div className="service-light">
               {serviceText}
            </div>
        </div>
     );
}
 
export default AboutText;