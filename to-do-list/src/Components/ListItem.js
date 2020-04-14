import React from 'react'
import Card from './Card'

export default function ListItem (props){

    function DoneImg(props) {
      if (props.done) {
        return <img src="./Assets/on.png" alt="checked"></img>;
      } else {
        return <img src="./Assets/off.png" alt="unchecked"></img>;
      }
    }
    
 
    return (
        <li>
        <Card className={props.item.done ? "done item": "item"}>
            {props.item.text}
            <div>
                <button onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => {props.onItemDeleted(props.item)}}><img src="./Assets/trash.png" alt="trash"></img></button>
            </div>
        </Card>
        </li>  
    )
    
}