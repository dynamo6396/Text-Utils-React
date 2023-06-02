import React,{useState} from 'react'
// useState is hook which is used to create text,setText 
export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log(" Uppercase was clicked "+ text)
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick =()=>{
        // console.log(" Uppercase was clicked "+ text)
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const cleartext =()=>{
        // console.log(" Uppercase was clicked "+ text)
        let newtext=""
        setText(newtext)
    }
    const handleOnChange =(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text,setText]=useState('');
    // text="fasdfa"  wrong way to change text 
    // setText("newText")  Correct way to change the state
  return (
    <>
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 " onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 " onClick={cleartext}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} Minutes to read this content </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
