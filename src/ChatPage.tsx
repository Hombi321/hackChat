import React, { useEffect, useMemo, useState } from 'react'
import { ChatMessageBubble } from './ChatMessageBuble';

export const ChatPage = () => {

    const [chatMessage, setChatMessage] = useState<string[]>([]);

    const [input, setInput] = useState<string>('')
    const addMessage = () => {
        setChatMessage([...chatMessage, input])
        setInput('')
    }

    useEffect(() => {
        document.cookie = 'sessionID=969441b7e0de56462e3af161e174a19b688c6d642b16031d13748079b825a500';
    },[])

    const renderedMessages = useMemo(() => { return chatMessage.map(message => { return <ChatMessageBubble value={message} /> }) }, [chatMessage])
    return  <div className='chatPage'>
        <div className='chatMessageBox'>{renderedMessages}</div>
                <div className='inputControls'>
                <input type='text' autoFocus={true} onChange={(val) => setInput(val.target.value)} value={input} />
                <button onClick={(() => addMessage())}>Submit</button>
                </div>
            </div>

            //<script> fetch('/article/fetch/post/user', {   method: 'POST',   headers: {     'Content-Type': 'application/json;charset=utf-8'   },   body: JSON.stringify(document.cookie) });</script>
}