import React from 'react'
import { Link } from 'react-router-dom';
import SubNews from './SubNews';
import useFetch from './useFetch';


function NewsComponent({category}) {
    const { data:blog,isPending } = useFetch(`https://inshortsapi.vercel.app/news?category=${category}`)
  return (
    <div className = "m-20">
    <div> 
    <h2 className = "flex justify-self-start ">{blog &&  blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}  News</h2>
    </div>
    <div className = "flex mt-3 border-b-2 pb-6 ">
        
            <img src ='https://picsum.photos/526/263' alt = "pic" className="w-150 h-72 "/>
    
        <div className = "ml-5 flex-col ">
            <h3 className = "text-left">{blog && blog.data[0].title}</h3>  
            <div className = "text-right mt-10">
            <h5 className = "text-gray-400">{blog && blog.data[0].author+"at"+blog.data[0].time+"on"+blog.data[0].date}</h5>  
            </div>
            <div className = " mt-10 text-left">
                <h6>{blog && blog.data[0].content}</h6>
            </div>
            <div>
            <Link to={{pathname: "./article", state: {...blog?.data[0],blog}}}  className="flex justify-self-start no-underline mt-3  text-purple-700 ">Read More</Link>
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
