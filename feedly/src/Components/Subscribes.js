import { Modal } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import { useState } from "react";
import subPic from "../Pictures/Sub.png"


const Subscribes = ({ showSub, setSub }) => {
    const [email,setEmail] = useState('')
    const postReq = ()=>{
        fetch('https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(email)
        } ).then(()=> {
            console.log("posted")
        })
        
    }
  return (
    <Modal isOpen={showSub} onClose={() => setSub(false)} size="xs" closeButton={false}>
    <Modal.Body className="mt-5">
      <div className = "mt-8 ml-auto mr-auto">
        <img src={subPic} alt= "subscribe"/>
        <br />
        <p className="font-bold text-2xl">Subscribe to Feed.ly</p>
        <br />
        <p className="">We don't spam but we deliver the latest news in short</p>
        <br />
      </div>
      <Input placeholder="oliver@example.com" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
    </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          size="large"
          label="Sign Up"
          onClick={() => {setSub(false);postReq()}}
        />
        <Button
          style="text"
          size="large"
          label="Cancel"
          onClick={() => setSub(false)}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default Subscribes;
