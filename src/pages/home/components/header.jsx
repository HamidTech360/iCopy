import React from 'react'
import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Box } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import {HiMenuAlt1} from 'react-icons/hi'
import {Divider} from '@material-ui/core'
import {AiOutlineMenu} from 'react-icons/ai'
import './css/header.css'


const useStyles = makeStyles({
  paper:{
    width:'300px',
    // background:'#00052b',
    // color:'whitesmoke',
    paddingTop:'30px'
  }
})



const Header = ({bgColor}) => {

    const NavOptions = [
        {
            id:0,
            name:'Home',
            link:'/'
        },
        {
            id:1,
            name:'About',
            link:'/about'
        },
        {
            id:2,
            name:'Services',
            link:'/service',
          
        },
        {
            id:3,
            name:'Portfolio',
            link:'/portfolio',
           
        },
        {
            id:4,
            name:'Blogs',
            link:'/blogs'
        },
    ]
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'right' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
          
        >
          <List>
                {NavOptions.map((item, index) => (
                  item.hash?
                  <div className="NavBar-item" key={index} style={{backgroundColor:item.isActive?'rgba(255, 255, 255, 0.15)':'', paddingLeft:'50px', paddingBottom:'10px',paddingTop:'10px', border:'1px solid grey'}}>
                  <HashLink to={item.link} style={{textDecoration:'none', color:'black'}}>
                    <span className="NavBar-item-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                     <span className="NavBar-item-item-text">{item.name}</span>
                  </HashLink>
                  <Divider/>
                </div>:
                  <div className="NavBar-item" key={index} style={{backgroundColor:item.isActive?'rgba(255, 255, 255, 0.15)':'', paddingLeft:'50px', paddingBottom:'15px',paddingTop:'15px',  borderBottom:'1px solid whitesmoke'}}>
                      <Link to={item.link} style={{textDecoration:'none', color:'black', fontWeight:'800'}}>
                        <span className="NavBar-item-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                         <span className="NavBar-item-item-text">{item.name}</span>
                      </Link>
                  </div>
                ))} 
                {/* <HashLink to={"/#contactMe"}>
                <div className="navBar-item">
                  <button className="btn-contactus">Contact Me</button>
                </div>
                </HashLink> */}
            </List>
   
        
        </Box>
      );
    
     const styles = useStyles() 
    return ( 
        <div className="header" style={{backgroundColor:bgColor}}>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            classes={{paper:styles.paper}}
            transitionDuration={400}
          >
               {list()}
          </SwipeableDrawer>
            {/* <img src="../../../assets/icopy.jpg" alt="logo" className="logo-img" /> */}
            <span className="app-name"> <span className="colored-i">I</span>COPY<span className="colored-i">S</span>TORY</span>
            <span className="pull-right">
                <span className="hideOnMobile">
                    <ul className="nav ">
                       
                          <Link to={'/'}  style={{textDecoration:'none'}}>
                              <li className="nav-item">Home</li>
                          </Link>

                          <Link  to={'/about'} style={{textDecoration:'none'}}>
                          <li className="nav-item">About</li>
                         </Link> 

                         <Link  to={'/service'} style={{textDecoration:'none'}}>
                            <li className="nav-item">Services</li>
                         </Link>

                         <Link  to={'/blogs'} style={{textDecoration:'none'}}>
                            <li className="nav-item">Blogs</li>
                         </Link>
                        
                         <Link  to={'/portfolio'} style={{textDecoration:'none'}}>
                            <li className="nav-item">Portfolio</li>
                         </Link>
                        
                        
                       <Link to={"/contactMe"}>
                       <li>
                            <button className="btn-contactus">Contact Us</button>
                        </li>
                       </Link>
                    </ul>
                </span>
                <span className="hideOnDesktop" onClick={toggleDrawer('right', true)} style={{fontWeight:'300'}}>
                    
                       <AiOutlineMenu size={30} />
                   
                </span>
            </span>
        </div>
     );
}
 
export default Header;