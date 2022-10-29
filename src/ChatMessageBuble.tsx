import React, { FC } from 'react'
import InnerHTML from 'dangerously-set-html-content'
import { ChatMessageType } from './ChatPage'

type ChatMessageBubbleType = {
    value: ChatMessageType
}

export const ChatMessageBubble:FC<ChatMessageBubbleType> = (props) => {
    const {user, message} = props.value;
    return <div className='chatMessageBubble'><InnerHTML html={`${user}: ${message}`} /> </div>
}