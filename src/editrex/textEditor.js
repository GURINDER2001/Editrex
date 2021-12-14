import React, { useState } from 'react'

const TextEditor = (props) => {
 const {text,updateText}=props;
 const {temptext ,setTempTExt} = useState(text)
    return (
        <div >
            <textarea name="" id="" cols="30" rows="10" value={text} onChange={()=>updateText(text)}></textarea>
           
            {temptext}
        </div>
    )
}

export default TextEditor
