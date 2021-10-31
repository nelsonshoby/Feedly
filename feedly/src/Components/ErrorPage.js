import React from 'react'
import errorPic from "../Pictures/Error.png"
import { Button,Typography } from "@bigbinary/neetoui/v2";
import { Link } from 'react-router-dom'

const  ErrorPage= () => {
    return (
        <div>
            <div className = "absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
                <img src={errorPic} alt= "subscribe"/>
                <br/>
                <Typography style="h4"className="font-bold text-2xl">You have landed somwhere unknown.</Typography>
                <br/>
                <Link to={{pathname: "/"}} >
                <Button 
                    label="Take me home"
                    
                    style="secondary"
                    
                    iconPosition = "left"/></Link>
            </div>
        </div>
    )
}

export default ErrorPage
