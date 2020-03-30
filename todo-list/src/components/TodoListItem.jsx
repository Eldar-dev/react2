import React from 'react';

function TodoListItem({ todo }) {
    return (
    <li className="itemTodo">
        <span className="item">{ todo }</span>
            <div className="remBtn">
                <button className="deleteBtn">Delete</button>
                <button className="impBtn">!</button>
            </div>
    </li>
    );
  }

  export default TodoListItem;