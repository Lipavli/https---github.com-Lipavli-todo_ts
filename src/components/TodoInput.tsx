import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Todo from "../Modals/Todo";
import styles from "../styles/TodoInput.module.css";

type Props = {
  addTodo: (newTodo: Todo) => void;
};

const byDefault = {
  title: "",
};

const TodoInput: FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<{ title: string }>(byDefault);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { title } = newTodo;
    if (title) {
      addTodo({ title, id: Date.now(), done: false });
      setNewTodo(byDefault);
    }
  };
  return (

      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          name="title"
          type="text"
          placeholder="Add your task"
          onChange={handleChange}
          value={newTodo.title}
        />
        <button type="submit">Add</button>
      </form>

  );
};

export default TodoInput;
