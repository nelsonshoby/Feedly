import React, {useContext, useEffect} from 'react'
import { ListContext } from '../App'
import NewsComponent from './NewsComponent'
import { Tag } from "@bigbinary/neetoui/v2";
import { useHistory } from "react-router";


function Home({}) {

    const history = useHistory();

    const {category_check_list, setCategoryCheckList} = useContext(ListContext)
    const rem = (ele) => {
        setCategoryCheckList (category_check_list.filter((item)=> item !== ele) ) 
    }
    useEffect(()=>{
        if(category_check_list.length === 0){
            history.push("/empty")
        }
    },[category_check_list])
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
                   <NewsComponent category= {ele}/> 
                </div>
            ))}
        </div>
    )
}

export default Home
