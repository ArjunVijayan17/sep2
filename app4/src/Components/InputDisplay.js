import React, {useState} from "react";
function InputDisplay(){
    const [text, setText] = useState("");
    function handlechange(event){
        setText(event.target.value);
    }
    return(
        <div>
            <h1>Input Display</h1>
            <input type="text" value={text} onChange={handlechange}></input>
            <h3>You Typed: {text}</h3>
        </div>
    );
}
export default InputDisplay