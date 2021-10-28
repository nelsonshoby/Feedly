import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Copy } from "@bigbinary/neeto-icons";
import { LoremIpsum } from 'react-lorem-ipsum';
import SubNews from './SubNews';



function Article() {
    const currentNews = useLocation().state;
    const arr = [0,1,2,3,4]
    arr.splice(currentNews.ele,1)
    const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
        } catch (err) {
          alert("Error while copying")
        }
      };
    return (
        <div className = "flex-col m-20  ">
            <h1 className ="flex">{currentNews.title}<Copy onClick={() => copyToClipBoard(currentNews.readMoreUrl)} className="mt-2"/></h1>
            <h5 className = "text-gray-400 pt-2 text-left">{currentNews && currentNews.author+"at"+currentNews.time+"on"+currentNews.date}</h5>
            <div className="flex items-center justify-center mt-8">
                <img src ='https://picsum.photos/526/263' alt = "pic" className="w-150 h-72 "/>
            </div>
            <div>
                <div className="mt-8 text-left">{currentNews.content}</div>
                <div className = "pt-2 border-b-2 pb-6 text-left ">
                <LoremIpsum p={5} />
                </div>
                <div>
                <div className = "grid grid-cols-2 gap-x-60 border-b-2 pb-6">
                    {arr.map((ele,index) => (
                    <div key = {index}>
                    <SubNews blog = {currentNews.blog} ele = {ele}/>
                    </div>
                    ))
                    }
                </div>  
                </div>

            </div>
            
        </div>
    )
}

export default Article
