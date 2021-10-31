import React, { useState } from 'react'
import { Search,Notification,Filter } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Tooltip } from "@bigbinary/neetoui/v2";
import Subscribes from './Subscribes';
import ShowFilter from './ShowFilter';
import SearchNews from './SearchNews';
import { Typography } from "@bigbinary/neetoui/v2";

function NavBar() {
    const[showSub,setSub] = useState(false)
    const [showPane, setShowPane] = useState(false);
    const[showSearch,setShowSearch] = useState(false)
    return (
            <nav className="border-b-2 ">
                <div className=" mx-8 ">
                    <div className="flex justify-between">
                    <div className="flex">
                    <Typography style="h2"className ="mt-2 text-lg text-gray-500 font-bold">Feed.ly</Typography>
                    </div>
                    <div className="flex justify-end mt-2">
                    <Tooltip placement = {"bottom"} content = {"Search"}>
                        <div className="ml-5" onClick = {()=>setShowSearch(!showSearch)}><Search/></div>
                    </Tooltip>
                    <Tooltip placement = {"bottom"} content = {"Notification"}>
                        <div onClick = {()=>setSub(!showSub)} className="ml-5"><Notification/></div>
                    </Tooltip>
                    <Tooltip placement = {"bottom"} content = {"Filter"}>
                    <div onClick = {()=>setShowPane(!showPane)} className = "ml-5 mb-2 rounded">
                    <Button label ="Filter" style = "secondary" icon={Filter} /></div>
                    </Tooltip>
                    </div>
                    </div>
                </div>
                <Subscribes showSub = {showSub} setSub = {setSub}/>
                <ShowFilter showPane = {showPane} setShowPane = {setShowPane}/>
                <SearchNews showSearch = {showSearch } setShowSearch = {setShowSearch}/>
            </nav>
          
    )
}

export default NavBar
