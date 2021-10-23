import React, {useState} from 'react'

export default function TextForm(props) {
    

    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =()=>{

        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleCharCount =()=>{
        let newText = text.length;
        alert("Total number of character count = "+newText);
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState(' ');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={
                    {backgroundColor: props.mode==='dark'?'white':'white', 
                    color:props.mode==='dark'?'dark':'dark'}}
                 id="myBox" rows="9"></textarea>
        </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCharCount}>Total Word Count</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>Total words count = <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong></p>
        <p>Read Time = <strong>{ 0.008 * text.split(" ").length}</strong> minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
    )
}
