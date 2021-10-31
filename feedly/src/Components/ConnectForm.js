import React, { useState } from 'react'
import { Input ,Textarea,Modal,Button} from "@bigbinary/neetoui/v2";

const  ConnectForm = ({connect,setConnect}) =>{
    const [name,setName] = useState('')
    const [mail,setMail] = useState('')
    const [message, setMessage] = useState('')

    const postReq = ()=>{
        fetch('https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({name,mail,message})
        } ).then(()=> {
            console.log("posted")
        })
        
    }
    return (
        <div>
            <Modal isOpen={connect} onClose={() => setConnect(false)} size="md" closeButton={false}>
            < Modal.Body className="mt-5">
      <div className = "mt-8 ml-auto mr-auto">
        
        <br />
        <p className="font-bold text-2xl">Can't find what you came for</p>
        <br />
        <p className="">Write to us about which category interests you and we will fetch them for you daily, for free.</p>
        <br />
      </div>
      <div className = "flex">

      <Input className="mr-2" placeholder="Oliver Smith" label = "Name" value = {name} onChange = {(e)=>setName(e.target.value)} />
      <Input placeholder="oliver@example.com"  label = "Email" value = {mail} onChange = {(e)=>setMail(e.target.value)}/>
      </div>
      <Textarea label = "Message" className ="mt-2" placeholder="Write your message here" value = {message} onChange = {(e)=>setMessage(e.target.value)} />
    </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          size="large"
          label="Sign Up"
          onClick={() => {setConnect(false);postReq()}}
        />
        <Button
          style="text"
          size="large"
          label="Cancel"
          onClick={() => setConnect(false)}
        />
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default ConnectForm

