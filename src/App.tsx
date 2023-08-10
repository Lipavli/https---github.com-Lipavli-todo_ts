import React, { FC, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todo from "./Modals/Todo";
import TasksList from "./components/TasksList";
import useTodos from "./hooks/useTodos";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App: FC = () => {

  const { todosList, addTodo, deleteTodo, updateTodo, toggleTodo } = useTodos();

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <TodoInput addTodo={addTodo} />
      <TasksList
        todoList={todosList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default App;
