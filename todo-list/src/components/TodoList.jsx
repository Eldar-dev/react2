import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(){
    const todoList = [
        'Drink Coffe', 
        'Learn React', 
        'Make Awesome App'
    ];
    const element = todoList.map((item, index) => (
    <TodoListItem key={item} todo={item} />));
    return <ul className="myList">{element}</ul>;
}

  export default TodoList;