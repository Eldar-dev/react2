import React from 'react';

function TodoFileters(){
    return (
        <div className="filters">
            <button className="filterBtn active">All</button>
            <button className="filterBtn">Active</button>
            <button className="filterBtn">Done</button>
        </div>
    );
}

export default TodoFileters;