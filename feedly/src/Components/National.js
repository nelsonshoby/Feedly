import React from 'react'

function National({blog}) {
    return (
        <div>
            <div> 
            <h2 className = "flex justify-self-start ">National news</h2>
            </div>
            <div className = "flex mt-3 ">
            <div>
                <img src = "https://picsum.photos/id/237/526/263" alt = "fvfv"/>
            </div>
            <div>
        <       div className = "ml-5 flex-col items-center">
                    <h3>{blog && blog.data[1].title}</h3>  
                    <div className = "text-right mt-10">
                         <h5>{blog && blog.data[1].author+"at"+blog.data[1].time+"on"+blog.data[1].date}</h5>  
                    </div>
                    <div className = "max-w-2xl mt-16">
                        <h6>{blog && blog.data[1].content}</h6>
                    </div>
                    <div>
                        <a href="#" className="flex justify-self-start no-underline mt-5 text-purple-600">Read More</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default National
