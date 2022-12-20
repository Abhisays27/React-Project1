import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
   setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here2');//Made state usestate hook set state function to update text function
  return (
    <div>
      <h1>{props.heading}</h1>
      
    <div className="mb-3">
      <textarea
        className="form-control"
        onChange={handleOnChange}//so that i can type in the text after change
        value={text}//text in the area
        id="MyBox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
      </div>
    </div>
  );
}
