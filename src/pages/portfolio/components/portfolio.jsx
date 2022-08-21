import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {apiUrl} from '../../../config.json'
import portfoloLinks from '../../../helpers/portfolioLink'
import axios from 'axios'
// import { Fab } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link'
import '../css/portfolio.css'

export default function Portfolio() {
    const [categories, setCategories] =useState(
        [
            { id:0, name:'All',active:true, category:'all', link:'#'},
            {id:1,name:'Email',active:false, category:'Email', link:'#email' },
            { id:2, name:'Sales Copy',active:false, category:'Sales Copy', link:'#sales' },
            { id:3, name:'Content',active:false, category:'Content', link:'#content' },
            // { id:3, name:'SEO optimization',active:false, category:'Seo Optimization'},
            // { id:3, name:'Affiliate Marketing',active:false, category:'Affiliate marketing'}
        ] 
    )
    
       
    const [data, setData] = useState([])
    const [img_dir, setImg_dir] = useState('')

    // useEffect(()=>{
    //     async function getPosts(){
    //         const response =  await axios.get(`${apiUrl}/upload/post/`)
            
    //         setData(response.data.data)
    //         setImg_dir(response.data.image_dir)
            
            
    //     }
    //     getPosts()
    // },[])


    const [filtered, setFiltered] = useState([])
    const handleSelection = (item, i)=>{
        const clone = [...categories]
        clone.map(el=>el.active=false)
        clone[i].active = true
        setCategories(clone)

        const currentActive = categories.find(e=>e.active)
        const acitveCateg = currentActive.category
        const filter = acitveCateg? data.filter(el=>el.category===acitveCateg):data;

        setFiltered(filter)
        console.log(currentActive.category);
    }
   
    return (
        <>
        <div className="portfolio" id="portfolio">
            <div className=" text-center portfolio-header">Portfolio Showcase</div>
            <div className="portfolio-text">
                Below are some of the works I've helped industries, brands, and companies with. 
                you can ask for industry-specific samples if you so wish. It's free.
            </div>
            <div className="text-center"><button className="btn-divider"></button></div>
            
            <div className="categ-tab  text-cente">
            
                {categories.map((item, i)=>
                <HashLink to={item.link}>
                    <button 
                        key={i} 
                        className={`btn-categs ${item.active?'active':''} `}
                        onClick={()=>handleSelection(item, i)}
                    >
                        {item.name}
                    </button>
                </HashLink>
                )}

            </div>
            <hr />

            <div className="portfolio-links">
                <div className="list-header">Email</div>
                <ul className='portfolio-lists' id="c" >
                    {portfoloLinks.Emali.map((el, item)=>
                        <li id="email"> <a href={`${el.link}`}>{el.item}</a> </li>
                    )}
                </ul>

                <div className="list-header">Sales Copy</div>
                <ul className='portfolio-lists' >
                    {portfoloLinks.SalesCopy.map((el, item)=>
                        <li id="sales"> <a href={`${el.link}`}>{el.item}</a> </li>
                    )}
                </ul>

                <div className="list-header">Content</div>
                <ul className='portfolio-lists' >
                    {portfoloLinks.Content.map((el, item)=>
                        <li id="content"> <a href={`${el.link}`}>{el.item}</a> </li>
                    )}
                </ul>
            </div>
        </div>

       
          

        </>
          
    )
}                             