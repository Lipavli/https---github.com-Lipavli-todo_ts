import React, { FC } from "react";
import Todo from "../Modals/Todo";
import TodoItem from "./TodoItem";

type Props = {
  todoList: Todo[];
  updateTodo: (newPizza: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TasksList: FC<Props> = ({
  todoList,
  updateTodo,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <div className="items-container">
      {todoList.map((todoItem) => {
        return (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
};

export default TasksList;
