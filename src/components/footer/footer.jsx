import React from 'react'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import './footer.css'
const Footer =()=>{
   return(
    <div className="footer">
         <span className="icon">
                    <GraphicEqIcon
                        style = {{
                            color:'#FB9C23',
                            fontSize:'45px'
                        }}
                    />
                   IcopyStory
        </span>
       <div className="row">
            <div className="footer-text col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="drop-mail-box">
                    <button className=" btn-send-mail" style={{ color:'white', fontSize:'12px', marginRight:'0px'}}>Send mail</button>
                    <input type="text" className="send-mail-inpt" />
                </div>
                Stories are magnets that attract prospects to your buisness 
            </div>

            <div className="footer-icons col-lg-5 col-md-7 col-sm-12 col-xs-12">
                <i className="fa footer-icon fa-instagram fa-2x"></i> 
                <i className="fa footer-icon fa-twitter fa-2x"></i>
                <i className="fa footer-icon fa-linkedin fa-2x"></i>
            </div>
            
       </div>

       <div className="footer-links">
           <div className="footer-link-header">Pages</div>
           <div className="footer-link-grid row">
               <div className="footer-link-item col-4">Home</div>
               <div className="footer-link-item col-4">About</div>
               <div className="footer-link-item col-4">Services</div>
               <div className="footer-link-item col-4">Portfolio</div>
               <div className="footer-link-item col-4">Contact</div>
               <div className="footer-link-item col-4">Admin</div>
               <div className="footer-link-item col-4">Home</div>
               <div className="footer-link-item col-4">About</div>
               <div className="footer-link-item col-4">Services</div>
               <div className="footer-link-item col-4">Portfolio</div>
               <div className="footer-link-item col-4">Contact</div>
               <div className="footer-link-item col-4">Admin</div>
           </div>
       </div>

       <hr className="footer-hr" />
       <div className="designed-by text-center">
           Designed and developed by <br /> <a href="https://wa.me/+2347015713905">HamidTech software</a>
       </div>
        {/* <div className="privacy">
            Privacy policy
        </div> 
        <div className="copyright">
            copyright 2021 All rights reserved| medaweb SOftware
        </div> 
        <div className="icons">
            <i className="fa fa-facebook fa-1x foterIcon"></i>
            <i className="fa fa-whatsapp fa-1x foterIcon"></i>
            <i className="fa fa-twitter  fa-1x foterIcon"></i>
        </div> */}
    </div>
   )
}

export default Footer 