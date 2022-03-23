import React from 'react';
import moment from 'moment';
import './css/usertab.css'

const UserTab = ({data}) => {
    return ( 
        <div className="usertab">
            <div className="tabBox">
                <img src="../../../../assets/client.jpg" alt="client" className='userImg' />
                <div className="userInfo">
                    <div className="username">
                        Hammed Tech 360 <button className="btn-follow bg-success">Follow</button>
                    </div>
                    <div className="postdDate">
                        {moment(data.updatedAt).format('LLL')} . 4 minutes read 
                    </div>
                </div>
                <div className="pull-right post-icons hideOnMobile">
                    <i className="fa fa-twitter post-icon"></i>
                    <i className="fa fa-facebook post-icon"></i>
                    <i className="fa fa-linkedin post-icon"></i>
                </div>
                
            </div>
            <div className="post-icons hideOnDesktop">
                    <i className="fa fa-twitter post-icon"></i>
                    <i className="fa fa-facebook post-icon"></i>
                    <i className="fa fa-linkedin post-icon"></i>
            </div>
        </div>
     );
}
 
export default UserTab;