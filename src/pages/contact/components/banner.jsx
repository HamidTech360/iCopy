import { LaptopWindows } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import { Fade } from 'react-reveal';
import './css/banner.css'


const ContactBanner = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    const [data, setData] = useState({
        q1:'',
        q2:'',
        q3:''
    })

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        console.log(data);
    }


    const [showQ1, setShowQ1]= useState(true)
    const [showQ2, setShowQ2]= useState(false)
    const [showQ3, setShowQ3]= useState(false)
    const [showQ4, setShowQ4]= useState(false)
    const [showQ5, setShowQ5]= useState(false)

    const display2= ()=>{
        setShowQ1(false)
        setShowQ2(true)
    }

    const display3= ()=>{
        setShowQ2(false)
        setShowQ3(true)
    }

    return ( 
       <div className="questionaire">
          {showQ1?  
          <Fade right duration={1000}>
           <div className="questions text-center">
                <div className="questions-bold">
                        We'll like to know you. Let's start by knowing your name. ...SO what's your name
                </div>
                <div className="formbox">
                    <div className="form-group">
                        <input type="text" className='form-control' name="q1" onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <button className="btn btn-next" onClick={()=>display2()}>continue <fa className="fa fa-arrow-right"></fa> </button>
           </div>
           </Fade>:''}

           {showQ2?  
          <Fade right duration={1000}>
           <div className="questions text-center">
                <div className="questions-bold">
                        Awesome! What's your email?
                </div>
                <div className="formbox">
                    <div className="form-group">
                        <input type="text" className='form-control' name="q2" onChange={(e)=>handleChange(e)}  />
                    </div>
                </div>
                <button className="btn btn-next" onClick={()=>display3()}>continue <fa className="fa fa-arrow-right"></fa> </button>
           </div>
           </Fade>:''}

           {showQ3?  
          <Fade right duration={1000}>
           <div className="questions text-center">
                <div className="questions-bold">
                        What's the greatest obstacle that's holding you back from hitting your revenue goal
                </div>
                <div className="formbox">
                    <div className="form-group">
                        <input type="text" className='form-control' name="q3" onChange={(e)=>handleChange(e)}  />
                    </div>
                </div>
                <button className="btn btn-next">continue <fa className="fa fa-arrow-right"></fa> </button>
           </div>
           </Fade>:''}


         
       </div>
     );
}
 
export default ContactBanner;