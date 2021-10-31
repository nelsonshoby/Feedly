import {React, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Typography } from "@bigbinary/neetoui/v2";


function SubNews({blog,ele}) {
    const  [slug,setSlug] = useState('')
    const  [category,setCategory] = useState('')

    useEffect(() => {
        
        if(Object.keys(blog)!= 0) {
            setSlug(blog?.data?.[ele]?.url.slice(33))
            setCategory(blog?.category)
        }

    }, [blog])
    return (
        <div>
           <div className = "flex pt-4">
            <img src = "https://picsum.photos/84/84" alt = "pic"/>
                
                <div className = "flex-col text-left pl-2">
                <Typography style="h5">{blog.data ? (blog?.data?.[ele])?.title : "Not found"}</Typography>
                   <Typography style="body3" className = "text-gray-400 mt-1">{blog.data ? (blog?.data?.[ele])?.author+"at"+" "+(blog?.data?.[ele])?.time+" on"+(blog?.data?.[ele])?.date : "Not Found"}</Typography>
                   <div>
                    <Link to={`/${category}/${slug}`} key={slug}  className="flex justify-self-start no-underline mt-1 text-purple-700 ">Read More</Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default SubNews
