import {React,useContext, useState} from 'react'
import  ReactDOM  from 'react-dom'
import { Input } from "@bigbinary/neetoui/v2";
import { Search} from "@bigbinary/neeto-icons";
import { FullDataContext, ListContext, SelectedCategoryContext } from '../App';
import { Link } from 'react-router-dom';
import {debounce} from 'lodash'

const SearchNews = ({showSearch,setShowSearch}) => {

    const {blog,setBlogdata} = useContext(SelectedCategoryContext)
    const {fullData,setFullData} = useContext(FullDataContext)
    const [searchInput,setSearchIn] = useState()
    const {category_check_list, setCategoryCheckList} = useContext(ListContext)
    let ele =0


    if(!showSearch ) return null
    return ReactDOM.createPortal (

        <div>
            <div 
                onClick = {()=>setShowSearch(false)}  
                onClose={() => {
                    setSearchIn(null)
                    setShowSearch(false)
                }} 
                className ="bg-gray-700 opacity-75 fixed top-0 bottom-0 right-0 left-0 ">
            </div>
            <div className = "fixed top-1/3 w-full h-full">
                
                <div className="flex flex-col items-center">
                    <Input className="w-1/3  " label="Search" size="large" prefix={<Search size={20} />} onChange={debounce((e)=>setSearchIn(e.target.value),500)}/>
                    {
                        searchInput &&(
                            <div className = "w-1/3 bg-white " >
                                {
                                    category_check_list.flatMap((category)=>{
                                        return (fullData.filter(ele => ele.category === category).map(elem=>(elem.data).map((item) => ({...item , category : elem.category}))))[0].filter((news)=>{
                                            return news?.title.toLowerCase().includes(searchInput.toLowerCase())})
                                    }).map((element)=> <div className = " bg-gray-400 p-3 m-2 rounded-lg  hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:ring-opacity-10 "  >
                                        <Link 
                                            to={`/${element["category"]}/${element.url.slice(33)}`}  
                                            onClick = {()=>{
                                                setShowSearch(false)
                                                setSearchIn(null)
                                                }}>
                                                {element.title}
                                        </Link>
                                    </div>)
                                }
                            </div>
                        )
                    }
                </div>
            </div>   
        </div>,document.getElementById('search')

    );
}

export default SearchNews
