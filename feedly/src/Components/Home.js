import React, {useContext, useEffect ,useState} from 'react'
import { FullDataContext, ListContext, TodaysNewsContext } from '../App'
import NewsComponent from './NewsComponent'
import { Tag } from "@bigbinary/neetoui/v2";
import { PageLoader } from "@bigbinary/neetoui/v2";
import { useHistory } from "react-router";
import axios from 'axios'
import { ALL_CATEGORY } from '../Constants/Constants';



function Home({}) {
    const allData = ALL_CATEGORY
    const history = useHistory();
    const rem = (ele) => {
        setCategoryCheckList (category_check_list.filter((item)=> item !== ele) ) 
    }
    const {category_check_list, setCategoryCheckList} = useContext(ListContext)
    const {fullData,setFullData} = useContext(FullDataContext)
    
    
    const [temp , setTemp] = useState({})

    let date = new Date()
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let today = String(date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear())
  
    

    useEffect(()=>{
            const fetchItems= async (data) => {
                data.forEach( async(items) => {
                    const resp = await axios.get(`https://inshortsapi.vercel.app/news?category=${items}`)
                    const data = await resp.data
                    setTemp(data)
                })
            }    
            fetchItems(allData)   
    },[allData])

    useEffect(() =>{
        if(Object.keys(temp).length!=0){
        setFullData(prev => [...prev, temp]) } 
    }, [temp])


    useEffect(()=>{
        if(category_check_list.length === 0){
            history.push("/empty")
        }
    },[category_check_list])
   if((fullData.length >= 12))
   {

    return (
        <div> 
            { 
            <div className = "flex ml-20"> {
             category_check_list.map((ele,index) => (  
                <Tag
                key = {index}
                label= {ele}
                className = "m-3"
                onClose={()=> rem(ele)}
                />  
             )) }
             </div>
        
            }
            {category_check_list.map((ele,index)=>(
                <div key = {index}>
                   <NewsComponent news= {ele}/> 
                </div>
            ))}
        </div>
    )
    }
    else return <div className="mt-80"><PageLoader /> </div>
}

export default Home
