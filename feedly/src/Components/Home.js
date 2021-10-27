import React from 'react'
import NewsComponent from './NewsComponent'

function Home() {
    return (
        <div>
            <NewsComponent category= "national"/>
            <NewsComponent category= "world"/>
            <NewsComponent category= "sports"/>
            <NewsComponent category= "business"/>
        </div>
    )
}

export default Home
