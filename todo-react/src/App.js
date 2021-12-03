import React, { useState, useEffect } from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  function filterHandler() {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  };

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  function getLocalTodos() {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  return (
    <div className="App">
      <header>
        <h1>Elad's To Do List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}></Form>
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
