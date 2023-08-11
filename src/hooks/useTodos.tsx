import React, { useState } from "react";
import Todo from "../Modals/Todo";
import { DropResult } from "react-beautiful-dnd";

//different states of todos to manipilate when change their position using dnd
const useTodos = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [todosPending, setTodosPending] = useState<Todo[]>([]);
  const [todosCompleted, setTodosCompleted] = useState<Todo[]>([]);

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

  // here i create logic for dnd

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let move;

    
    if (source.droppableId === "TodosList") {
      move = todosList[source.index];
      todosList.splice(source.index, 1);
    } else if (source.droppableId === "completedList") {
      move = todosCompleted[source.index];
      todosCompleted.splice(source.index, 1);
    } else {
      move = todosPending[source.index];
      todosPending.splice(source.index, 1);
    }

    
    if (destination.droppableId === "TodosList") {
      todosList.splice(destination.index, 0, move);
    } else if (destination.droppableId === "completedList") {
      todosCompleted.splice(destination.index, 0, move);
    } else {
      todosPending.splice(destination.index, 0, move);
    }

    setTodosPending(todosPending);
    setTodosList(todosList);
    setTodosCompleted(todosCompleted);
  };

  return {
    todosList,
    setTodosList,
    todosPending,
    setTodosPending,
    todosCompleted,
    setTodosCompleted,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleTodo,
    onDragEnd,
  };
};

export default useTodos;
