import { Pane } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Checkbox } from "@bigbinary/neetoui/v2";
import React, { useState } from 'react'

function ShowFilter({showPane,setShowPane}) {
   const[checkedFilter,setCheckedFilter] = useState({})
    return (
        <div>
        <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="body2">
            <div className = "p-5" onChange = {(e)=>e.target.checked && setCheckedFilter(e.target.value)}>
              <Checkbox
                className = "p-5"
                id="checkbox_name"
                label="National News"
                value = "National News"
                
              />
               <Checkbox
                className = "p-5"
                id="checkbox_name"
                value = "World News"
                label="World News"
              />
               <Checkbox
                className = "p-5"
                id="checkbox_name"
                value = "National News"
                label="Sports News"
              />
               <Checkbox
                className = "p-5"
                id="checkbox_name"
                value = "Business News"
                label="Business News"
              />
            </div>
          </Typography>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Continue"
            onClick={() => setShowPane(false)}
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
