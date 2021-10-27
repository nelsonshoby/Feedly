import React from 'react'
import useFetch from './useFetch';

function NewsComponent({category}) {
    const { data:blog,isPending } = useFetch(`https://inshortsapi.vercel.app/news?category=${category}`)
  return (
    <div className = "m-20">
    {blog&&console.log(blog)}
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
            <a href="#" className="flex justify-self-start no-underline mt-3  text-purple-700 ">Read More</a>
            </div>
        </div>
    </div>
    <div className = "grid grid-cols-2 gap-x-60 border-b-2 pb-6">
        {[1,2,3,4].map((ele) => (
            <div className = "flex pt-4">
            <img src = "https://picsum.photos/84/84" alt = "pic"/>
                
                <div className = "flex-col ">
                   <strong className = "text-left">{blog && blog.data[ele].title}</strong>
                   <br/>
                   <div className = "text-gray-400">{blog && blog.data[ele].author+"at"+blog.data[ele].time+"on"+blog.data[ele].date}</div>
                   <div>
                    <a href="#" className="flex justify-self-start no-underline mt-3 text-purple-700 ml-3">Read More</a>
                    </div>
                </div>
            </div>
        ))
        }
    </div>
    </div>
  );
}

export default NewsComponent
