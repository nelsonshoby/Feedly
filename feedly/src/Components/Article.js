import React, { useState,useEffect,useContext } from 'react'
import { useLocation } from 'react-router';
import { useParams} from 'react-router-dom';
import { Copy } from "@bigbinary/neeto-icons";
import { LoremIpsum } from 'react-lorem-ipsum';
import SubNews from './SubNews';
import { FullDataContext} from '../App'
import { Tooltip } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";



function Article() {
    
    const {fullData,setFullData} = useContext(FullDataContext)
    const {category,slug} = useParams()
    const [currentNews, setCurrentNews] = useState({})
    const [obj, setObj] =useState([])
    const [articlesub,setArticleSub] = useState({})
    const data1 = useLocation().state
    const data2 = data1 ? data1?.ele :0
    let arr = [0,1,2,3,4,5,6].filter((ele)=>ele!= data2)
    
    
    
    const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
        } catch (err) {
          alert("Error while copying")
        }
      };
    
    useEffect(()=>{
        const val = (fullData.filter((item)=>item.category === category))[0].data
        const data = fullData.filter(ele => ele.category === category)
        setArticleSub(data[0])
        setObj(val)

    },[fullData])
    


    useEffect(() => {
        if(obj.length!==0){
            const urlSlice = obj[0].url.slice(0,33)
            const original = obj.filter((val) => val.url === urlSlice+slug)
            setCurrentNews(original[0])
        }
    },[obj])



    return (
        <div className = "flex-col m-20  ">
            <Typography style="h1" className ="flex">{currentNews?.title}
            <Tooltip placement = {"bottom"} content = {"Copy"}>
            <div>
            <Copy onClick={() => copyToClipBoard(currentNews?.readMoreUrl)} className="mt-2 "/>
            </div>
            </Tooltip>
            </Typography>
            <Typography style="body1" className = "text-gray-400 pt-2 text-left">{currentNews && currentNews?.author+"at"+" "+currentNews?.time+" on"+currentNews?.date}</Typography>
            <div className="flex items-center justify-center mt-8">
                <img src ='https://picsum.photos/526/263' alt = "pic" className="w-150 h-72 "/>
            </div>
            <div>
                <Typography style="body2" className="mt-8 text-left">{currentNews?.content}</Typography>
                <div className = "pt-2 border-b-2 pb-6 text-left ">
                <Typography style="body2"><LoremIpsum p={5} /></Typography>
                </div>
                <div>
                <div className = "grid grid-cols-2 gap-x-60 border-b-2 pb-6">
                    {arr.map((ele,index) => (
                    <div key = {index}>
                    <SubNews blog = {articlesub} ele = {ele}/>
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
