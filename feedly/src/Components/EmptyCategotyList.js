import React, { useContext, useEffect } from 'react'
import Group from "../Pictures/Group.png"
import { Button } from "@bigbinary/neetoui/v2";
import { Edit } from "@bigbinary/neeto-icons";
import SubNews from './SubNews';
import { BlogContext } from '../App';


function EmptyCategotyList() {

    const {blogg , setBlogg} = useContext(BlogContext)

   
    return (
        <div className = "m-20">
            <div className = "flex flex-col items-center mt-10 border-b-4 pb-4">
                <img src={Group} alt= "subscribe"/>
                <h4 className = "mt-4">No News Article Found</h4>
                <Button
                    label="Write To Us"
                    onClick={function noRefCheck(){}}
                    style="secondary"
                    icon={Edit}
                    iconPosition = "left"
                    className = "mt-4 "
                />
            </div>
            <div className = "grid grid-cols-2 gap-x-60 border-b-2 pb-6">
                {[1,2,3,4,5,6].map((ele,index) => (
                <div key = {index}>
                <SubNews blog = {blogg} ele = {ele}/>
            </div> 
            ))
            }   
            </div>
        </div>
    )
}

export default EmptyCategotyList
