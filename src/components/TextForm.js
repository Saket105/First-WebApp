import React, {useState} from 'react'


// console.log(useState('Enter text here2...'));

export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("Upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        // console.log("Handle on CHange");
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter text here...');
    //  setText("asdfghjkl"); //correct way to change the state
    // text = "new text";//wrong way to change the state

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
    )
}
