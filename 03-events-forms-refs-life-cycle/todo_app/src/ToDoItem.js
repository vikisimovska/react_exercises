import React from "react";
//import styled from 'styled-components';

// const ListItem = styled.li`
//    text-decoration: ${props => (props.done ? 'line-through' : 'none')};
// `;

const ToDoItem = props => (
	<div>
	    <li
	        done={props.done}> 
	        {props.title} 
	        {props.description} 
	    </li> 
	    <button>Mark complete</button>
	    <button onClick={props.remove}>Remove</button>
	</div>    
);

export default ToDoItem;