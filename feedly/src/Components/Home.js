import React, {useContext, useEffect ,useState} from 'react'
import { FullDataContext, ListContext } from '../App'
import NewsComponent from './NewsComponent'
import { Tag } from "@bigbinary/neetoui/v2";
import { PageLoader } from "@bigbinary/neetoui/v2";
import { useHistory } from "react-router";
import axios from 'axios'
import { ALL_CATEGORY } from '../Constants/Constants';



function Home({}) {
    const allData = ALL_CATEGORY
    const history = useHistory();
    
    const {category_check_list, setCategoryCheckList} = useContext(ListContext)
    const {fullData,setFullData} = useContext(FullDataContext)
    const [temp , setTemp] = useState({})

    useEffect(()=>{
            const fetchItems= async (data) => {
                data.forEach( async(items) => {
                    const resp = await axios.get(`https://inshortsapi.vercel.app/news?category=${items}`)
                    const data = await resp.data
                    setTemp(data)
                })
            }    
        
            fetchItems(allData)   
    },[])
    useEffect(() =>{
        setFullData(prev => [...prev, temp])
    }, [temp])

    // useEffect(() => {
    //     console.log("thohs = ",fullData)
    // },[fullData])


    const rem = (ele) => {
        setCategoryCheckList (category_check_list.filter((item)=> item !== ele) ) 
    }
   
    useEffect(()=>{
        if(category_check_list.length === 0){
            history.push("/empty")
        }
    },[category_check_list])
    console.log(fullData)
   if(fullData.length=== 13)
   {

    return (
        <div> 
            {
             category_check_list.map((ele) => (
                <Tag
                label= {ele}
                className = "m-3"
                onClose={()=> rem(ele)}
                />
             ))   
            }
            {category_check_list.map((ele)=>(
                <div>
                   <NewsComponent news= {ele}/> 
                </div>
            ))}
        </div>
    )
    }
    else return <div className="mt-80"><PageLoader /> </div>
}

export default Home
