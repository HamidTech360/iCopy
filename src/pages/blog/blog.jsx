import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {apiUrl} from '../../config.json'
import Header from '../home/components/header';
import UserTab from './components/userTab';
import Post from './components/post';
import Footer from '../../components/footer/footer';

const Blog = (props) => {
    const postId = props.match.params.id
    const [preloader, setPreloader] = useState(true)
    const [data, setData] = useState([])
   
    useEffect(()=>{ 
        
        // setTimeout(()=>{
        //     setPreloader(false)
        //   },700)
         
    },[])

    useEffect(()=>{
        async function getCurrentPost (){
            try{
                const response = await axios.get(`${apiUrl}/upload/post/${postId}`)
                
                setData(response.data.data)
                setPreloader(false)
               // console.log(response.data.data);
            }catch(ex){
                console.log(ex.response?.data);
            }
        }
        getCurrentPost()
    })

    if(preloader){
        return(
          <div class="preloader"></div>
        )
    }


    return ( 
        <div className="blog">
            <Header bgColor="white" />
            <UserTab data={data} />
            <Post data={data} />
            <Footer/>
        </div>
     );
}
 
export default Blog;