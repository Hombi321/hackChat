import React, {FC} from 'react';
import InnerHTML from 'dangerously-set-html-content'

type ErrorMessageType = {
    message: string
}
export const ErrorMessage:FC<ErrorMessageType> = (props) =>{
    if(!props.message) return <></>
    return <div className='errorMessage'><InnerHTML html={`Credentials for User: ${props.message} are invalid`} /></div>
}