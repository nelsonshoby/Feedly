import { Pane } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Checkbox } from "@bigbinary/neetoui/v2";
import { useContext, useEffect, useState } from 'react'
import { ListContext } from "../App";


function ShowFilter({showPane,setShowPane}) {
  
    const {category_check_list, setCategoryCheckList} = useContext(ListContext)
    const [filterState, setFilterState] = useState(category_check_list)
    const cate = ["all","science","business","national","sports","world","technology"]
    
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
        {console.log(filterState)}
        <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold" >
            Filter Article
          </Typography>
        </Pane.Header>
        <Pane.Body>
        <div className = "p-5" >
        <h4>Category</h4>
        <div>
             {
               cate.map((ele)=> (
                <Checkbox
                checked = {filterState.includes(ele)?true:false}
                className = "p-5"
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
              />
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Continue"
            onClick={() => {setShowPane(false);setCategoryCheckList(filterState) }}
            
          />
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
