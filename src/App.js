import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      fname: "ram",
      lname: "kumar",
    },
    {
      id: uuidv4(),
      fname: "mani",
      lname: "keeranur",
    },
  ]);

  const addTodo = (tempTodo) => {
    setTodos([...todos, tempTodo]);
  };

  const handleDelete = (e) => {
    const id = e.target.id;
    console.log(id);
    let filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
