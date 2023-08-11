import React, { FC } from "react";
import Todo from "../Modals/Todo";
import TodoItem from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  todoList: Todo[];
  todosPending: Todo[];
  todosCompleted: Todo[];
  updateTodo: (newItem: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;

}
const TasksList: FC<Props> = ({
  todoList,
  updateTodo,
  deleteTodo,
  toggleTodo,
  todosPending,
  todosCompleted,
}) => {
  return (
    <div className="items-container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="active"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Active</h2>
            <div className="active__box">
              {todoList.map((todoItem, index) => {
                return (
                  <TodoItem
                    index={index}
                    todoItem={todoItem}
                    key={todoItem.id}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="PendingList">
        {(provided) => (
          <div
            className="pending"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Pending</h2>
            <div className="pending__box">
              {todosPending.map((todoItem, index) => {
                return (
                  <TodoItem
                    index={index}
                    todoItem={todoItem}
                    key={todoItem.id}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="completedList">
        {(provided) => (
          <div
            className="completed"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Completed</h2>
            <div className="completed__box">
            {todosCompleted.map((todoItem, index) => {
                return (
                  <TodoItem
                    index={index}
                    todoItem={todoItem}
                    key={todoItem.id}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                  />
                );
              })}{provided.placeholder}</div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TasksList;
