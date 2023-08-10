import React, { useState } from "react";
import Todo from "../Modals/Todo";

const useTodos = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodosList([...todosList, newTodo]);
  };

  const updateTodo = (newTodo: Todo) => {
    setTodosList(
      todosList.map((newItem) =>
        newItem.id === newTodo.id ? newTodo : newItem
      )
    );
  };
  const deleteTodo = (id: number) => {
    const newTodosList = todosList.filter((newItem) => newItem.id !== id);
    setTodosList(newTodosList);
  };

  const toggleTodo = (id: number) => {
    setTodosList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return {
    todosList,
    setTodosList,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleTodo,
  };
};

export default useTodos;
