import React from 'react';
import moment from 'moment';
import { SocialIcon } from 'react-social-icons';
import './css/usertab.css'

const iconStyles ={
    height:'40px',
    width:'40px',
    marginRight:'20px'
}

const UserTab = ({data}) => {
    return ( 
        <div className="usertab">
            <div className="tabBox">
                <img src="../../../../assets/client.jpg" alt="client" className='userImg' />
                <div className="userInfo">
                    <div className="username">
                        Yususf Tajudeen <button className="btn-follow bg-success">Follow</button>
                    </div>
                    <div className="postdDate">
                        {moment(data.updatedAt).format('LLL')} . 4 minutes read 
                    </div>
                </div>
                <div className="pull-right post-icons hideOnMobile">
                    <SocialIcon style={iconStyles} url="https://twitter.com/jaketrent" />
                    <SocialIcon style={iconStyles} url="https://facebook.com/jaketrent" />
                    <SocialIcon style={iconStyles} url="https://linkedin.com/jaketrent" />
                </div>
                
            </div>
            <div className="post-icons hideOnDesktop">
                    <SocialIcon style={iconStyles} url="https://twitter.com/jaketrent" />
                    <SocialIcon style={iconStyles} url="https://facebook.com/jaketrent" />
                    <SocialIcon style={iconStyles} url="https://linkedin.com/jaketrent" />
            </div>
        </div>
     );
}
 
export default UserTab;