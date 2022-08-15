import React from 'react';

const ToDoLists = (props) => {

    return (
    <>
    <div className="todo_style">
    
    <li><i className="lni lni-cross-circle" 
    aria-hidden="true"  
    onClick={()=> {
        props.onSelect(props.id)
    }} 
    />{props.texts}</li>
    </div>
    </>
    )
}

export default ToDoLists;