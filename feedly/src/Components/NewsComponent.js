import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BloggContext, FullDataContext, TodaysNewsContext} from '../App';
import SubNews from './SubNews';
import { Typography } from "@bigbinary/neetoui/v2";


function NewsComponent({news}) {
    
    const {blogg , setBlogg } = useContext(BloggContext)
    const {fullData,setFullData} = useContext(FullDataContext)
    const [blog,setBlogdata] = useState({})
    const  [slug,setSlug] = useState('')
    const  [category,setCategory] = useState('')
    const {todaysNews,setTodaysNews} = useContext(TodaysNewsContext)
    

    let data = []
    let date = new Date()
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let today = String(date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear())


    useEffect(() => {
        setBlogg(blog)
    },[blog])

    useEffect (()=>{
        data = fullData.filter(ele => ele.category === news)
        
        if(!todaysNews){
            data[0].data = data[0].data.filter((ele) => {
                
                return ele.date.slice(0,11) === today
            })
        }
       
        setBlogdata(data[0])
    },[news,fullData,todaysNews])

    
    useEffect(() => {
        if(Object.keys(blog).length != 0){
            setSlug(blog.data[0].url.slice(33))
            setCategory(blog.category)
        }
    },[blog])


  

  return (
    
    <div className = "m-20">

    <div>  
    <Typography style="h1" className = "flex justify-self-start ">{ (blog?.category)?.charAt(0).toUpperCase() + (blog?.category)?.slice(1)}  News</Typography>
    </div>
    <div className = "flex mt-3 border-b-2 pb-6 ">
        
            <img src ='https://picsum.photos/526/263' alt = "pic" className="w-150 h-72 "/>
    
        <div className = "ml-5 flex-col ">
            <Typography style="h3"className = "text-left">{blog.data ? (blog?.data?.[0])?.title : "Not Found"}</Typography>  
            <div className = "text-right mt-10">
            <Typography style="body2" className = "text-gray-400">{blog.data ? (blog?.data?.[0])?.author+"at"+(blog?.data?.[0])?.time+" "+ "on" +(blog?.data?.[0])?.date : "Not Found"}</Typography> 
            </div>
            <div className = " mt-8 text-left">
                <Typography style="body1">{blog.data ? (blog?.data?.[0])?.content : "Not Found"}</Typography>
            </div>
            <div>
            <Link to={`./${category}/${slug}`}  className="flex justify-self-start no-underline mt-3  text-purple-700 ">Read More</Link>
            </div>
        </div>
    </div>
    <div className = "grid grid-cols-2 gap-x-60 border-b-2 pb-6">
        {[1,2,3,4].map((ele,index) => (
            <div key = {index}>
            <SubNews blog = {blog} ele = {ele}/>
            </div> 
        ))
        }
    </div>
    </div>
  );
}

export default NewsComponent
