import React, {Component} from "react"
import ToDoItem from './ToDoItem'

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos:[{name:"one", done:true, id:1},
			       {name:"two", done:false, id:2}]
		};
	}

	render(){
		return(
			<div>
                 <ul>
                    {this.state.todos.map(todo => (<ToDoItem done={todo.done} key={todo.id} name={todo.name} />) )} 

                 </ul>
            </div>
			);
	}
}

export default TodoList;