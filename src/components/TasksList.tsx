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
      <div className="active">
        <h2>Active</h2>
        <div className="active__box">
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
      </div>
      <div className="pending">
        <h2>Pending</h2>
        <div className="pending__box"></div>
      </div>
      <div className="completed">
        <h2>Completed</h2>
        <div className="completed__box"></div>
      </div>
    </div>
  );
};

export default TasksList;
