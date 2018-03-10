import React, {Component} from "react"
import ToDoItem from './ToDoItem'

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos:[
			    {title:"one: ", description:"make breakfast", done:"false", id:0},
			    {title:"two: ", description:"got to gym", done:"false", id:1}
			    ]
		};
		//this.handleRemove = this.handleRemove.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	handleRemove(idx){
       const list = [...this.state.todos];
       list.splice(idx, 1);
       this.setState=({
       	   todos: list
       })
	}

	handleComplete(idx){

	}

	render(){
		const todoList = this.state.todos.map((todo, idx) => 
                    	(<ToDoItem 
                    		done={todo.done} 
                    		key={todo.id}
                    		id={todo.id} 
                    		title={todo.title} 
                    		description={todo.description} 
                    		remove={this.handleRemove.bind(this, idx)}
                    		complete={this.handleComplite}/>));
                    	
		return(
			<div>
                 <ul>
                     {todoList}
                 </ul>
            </div>
	    );
	}
}

export default TodoList;