import React, { FC, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todo from "./Modals/Todo";
import TasksList from "./components/TasksList";
import useTodos from "./hooks/useTodos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { DragDropContext } from "react-beautiful-dnd";

const App: FC = () => {
  const {
    todosList,
    todosPending,
    todosCompleted,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleTodo,
    onDragEnd
  } = useTodos();



   
    
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <Hero />
        <TodoInput addTodo={addTodo} />
        <TasksList
          todoList={todosList}
          todosCompleted={todosCompleted}
          todosPending={todosPending}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
         
        
        />
      </div>
    </DragDropContext>
  );
};

export default App;
