import React, {FC} from 'react';
type InputFieldType = {
    label: string,
    handler: (val: string) => void,
    value: string,
    type?: string
}
export const InputField:FC<InputFieldType> = (props) => {
    const {label, handler, value, type} = props;
    
    return <div className='inputField'>
        {label}:
        <input type={type || 'text'} value={value} onChange={(e) => handler(e.target.value)} />
    </div>
}