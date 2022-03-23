import React from 'react';
import './css/post.css'

const Post = ({data}) => {

    return ( 
        <div className="postPage">
             <div className="post-title">
                {data.title}
            </div>
            <div className="post-icons hideOnMobile">
                    <i className="fa fa-twitter post-icon"></i>
                    <i className="fa fa-facebook post-icon"></i>
                    <i className="fa fa-linkedin post-icon"></i>
            </div>
            <div className="postImgBox">
                <img src={data.filename} alt="post" className='postImg' />
            </div>
           <div className="post-body">
                {data.body}
           </div>
        </div>
     );
}
 
export default Post;