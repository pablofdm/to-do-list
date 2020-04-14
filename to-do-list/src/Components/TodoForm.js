import React, {useState} from 'react'

export default function TodoForm(props){

    const [text, setText] = useState("");


    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if (text) {
            
            props.onAddItem(text);
            setText("");
        }
    }

    return(
        <form>
            <input onChange={handleChange} className="formInput" type="text" value={text}></input>
            <button className="addButton2" onClick={addItem}>+</button>
        </form>
    )
}