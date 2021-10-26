import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const Home = () => {
  const { data,isPending } = useFetch(' https://inshortsapi.vercel.app/news?category=science')
 
  return (
    <div className="home">
      {console.log(data)}
    </div>
  );
}
 
export default Home;