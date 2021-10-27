import React from 'react'
import { Link } from 'react-router-dom'

function SubNews({blog,ele}) {
    return (
        <div>
           <div className = "flex pt-4">
            <img src = "https://picsum.photos/84/84" alt = "pic"/>
                
                <div className = "flex-col text-left pl-2">
                   <strong >{blog && blog.data[ele].title}</strong>
                   <br/>
                   <div className = "text-gray-400">{blog && blog.data[ele].author+"at"+blog.data[ele].time+"on"+blog.data[ele].date}</div>
                   <div>
                    <Link to={{pathname: "./article", state: {...blog?.data[ele],blog}}} className="flex justify-self-start no-underline mt-3 text-purple-700 ">Read More</Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default SubNews
