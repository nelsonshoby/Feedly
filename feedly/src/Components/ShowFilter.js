import { Pane,Button,Typography,Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { useContext, useEffect, useState } from 'react'
import { ListContext, TodaysNewsContext } from "../App";
import { Link } from "react-router-dom";
import { ALL_CATEGORY } from "../Constants/Constants";


const ShowFilter = ({showPane,setShowPane}) => {
  
    const {category_check_list, setCategoryCheckList} = useContext(ListContext)
    const [filterState, setFilterState] = useState(category_check_list)
    const {todaysNews,setTodaysNews} = useContext(TodaysNewsContext)
    const cate = ALL_CATEGORY
    
    
    useEffect (()=>{
      setFilterState(category_check_list)
    },[category_check_list])
    
    const categoryCheckboxFilterHandler = (e)=> {
        if (e.target.checked == true){
          setFilterState(prev => [...prev, e.target.value]);
        }else{
            const check_list = filterState.filter(check => check != e.target.value);
            setFilterState(check_list);
        }
    };
    return (
        <div>
        <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold" >
            Filter Article
          </Typography>
        </Pane.Header>
        <Pane.Body>
        <div className = "p-5" >
        <Typography style="h4">Category</Typography>
        <div>
             {
               cate.map((ele,index)=> (
                <Checkbox
                key = {index}
                checked = {filterState.includes(ele)?true:false}
                className = "p-3"
                id="checkbox_name"
                label={ele}
                value = {ele}
                onChange={e => categoryCheckboxFilterHandler(e)}
              />
               ))
             } 
          </div>
              

          </div>
          <div className = "w-full border-b-2">

          </div>
          <Checkbox
                className = "pl-10 pt-7"
                id="checkbox_name"
                label="Include archieved article"
                value = "archieved"
                checked = {todaysNews}
                onClick = {()=> setTodaysNews(prev => !prev)}
              />
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
        <Link to={`/`} ><Button
            icon={Check}
            size="large"
            label="Continue"
            onClick={() => {setShowPane(false);setCategoryCheckList(filterState);setTodaysNews(prev => prev) }}
            
          />
          </Link>
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
        </div>
    )
}

export default ShowFilter
