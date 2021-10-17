import React, {useState} from 'react'


// console.log(useState('Enter text here2...'));

export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("Upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =()=>{
        // console.log("Upper case was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        // console.log("Upper case was clicked "+text);
        let newText = '';
        setText(newText);
    }
    const handleCopy =()=>{
        // console.log("Upper case was clicked "+text);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleCharCount =()=>{
        // console.log("Upper case was clicked "+text)
        let newText = text.length;
        alert("Total number of character count = "+newText);
    }
    const handleOnChange =(event)=>{
        // console.log("Handle on CHange");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    //  setText("asdfghjkl"); //correct way to change the state
    // text = "new text";//wrong way to change the state

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCharCount}>Total Word Count</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>Total words count = <strong>{text.split(" ").length}</strong></p>
        <p>Read Time = <strong>{ 0.008 * text.split(" ").length}</strong> minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}
