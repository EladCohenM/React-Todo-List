import React from "react";
//Importing components
import Todo from "./Todo";

function TodoList({ todos, setTodos, filterTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;