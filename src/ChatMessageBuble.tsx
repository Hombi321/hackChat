import React, { FC } from 'react'
import InnerHTML from 'dangerously-set-html-content'

export interface ChatMessageBubbleInterface {
    value : string
}
export const ChatMessageBubble:FC<ChatMessageBubbleInterface> = (props) => {
    return <div className='chatMessageBubble'><InnerHTML html={`Hans: ${props.value}`} /> </div>
}