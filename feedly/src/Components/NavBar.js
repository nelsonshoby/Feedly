import React from 'react'
import { Search,Notification,Filter } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Tooltip } from "@bigbinary/neetoui/v2";

function NavBar() {
    return (
    
            <nav className="border-b-2 ">
                <div className=" mx-8 ">
                    <div className="flex justify-between">
                    <div className="flex">
                        <div className ="mt-2 text-lg text-gray-500 font-bold">Feed.ly</div>
                    </div>
                    <div className="flex justify-end mt-2">
                    <Tooltip placement = {"bottom"} content = {"Search"}>
                        <div className="ml-5"><Search/></div>
                    </Tooltip>
                    <Tooltip placement = {"bottom"} content = {"Notification"}>
                        <div className="ml-5"><Notification/></div>
                    </Tooltip>
                    <Tooltip placement = {"bottom"} content = {"Filter"}>
                    <div className = "ml-5 mb-2 bg-gray-300 rounded"><Button label ="Filter" style = "Secondary" icon={Filter} /></div>
                    </Tooltip>
                    </div>
                    </div>
                </div>
            </nav>
          
    )
}

export default NavBar
