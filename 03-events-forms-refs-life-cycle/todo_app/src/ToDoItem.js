import React from "react";
import styled from 'styled-components';

const ListItem = styled.li`
   text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;



const ToDoItem = props => <ListItem done = {props.done}> {props.name} </ ListItem>; 


export default ToDoItem;