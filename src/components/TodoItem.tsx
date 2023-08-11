import React, { FC, useState } from "react";
import Todo from "../Modals/Todo";
import EditInput from "./EditInput";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  todoItem: Todo;
  updateTodo: (newTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  index: number;
};

const TodoItem: FC<Props> = ({
  todoItem,
  updateTodo,
  deleteTodo,
  toggleTodo,
  index
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteTodo(todoItem.id);
  };

  const handleDone = () => {
    toggleTodo(todoItem.id);
  };

  return (
    <Draggable draggableId={todoItem.id.toString()} index={index}>

      {
        (provided)=> (
          <div className="single-todo" 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <div className="single-todo__top">
            <div className={`todo-item ${todoItem.done ? "done" : ""}`}>
              <h3>{todoItem.title}</h3>
            </div>
            <img
              src={todoItem.done ? "./images/cross.png" : "./images/tick.png"}
              onClick={handleDone}
            />
          </div>
          <div className="single-todo__bottom">
            <img src="./images/delete.png" onClick={handleDelete} className="delete"/>
            <img src="./images/pencil.png" onClick={handleEdit} />
          </div>
          {edit ? (
            <EditInput
              item={todoItem}
              updateTodo={updateTodo}
              handleEdit={handleEdit}
            />
          ) : null}
        </div>
        )
      }
   
    </Draggable>
  );
};

export default TodoItem;
