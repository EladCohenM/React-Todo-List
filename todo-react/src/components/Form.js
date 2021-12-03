import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    //JS 
    function inputTextHandeler(e) {
        setInputText(e.target.value);
    };

    function submitTodoHandler(e) {
        e.preventDefault();
        if (inputText) {
            setTodos([
                ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
            setInputText("");
        };
    };

    function statusHandler(e) {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandeler} type="text" placeholder="Add Item" className="todo-input" />
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;