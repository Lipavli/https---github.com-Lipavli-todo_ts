import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Todo from "../Modals/Todo";
import styles from "../styles/EditInput.module.css";

type Props = {
  item: Todo;
  updateTodo: (newTodo: Todo) => void;
  handleEdit: () => void;
};

const EditInput: FC<Props> = ({ item, updateTodo, handleEdit }) => {
  const [editTodo, setEditTodo] = useState<Todo>(item);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditTodo({
      ...editTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title } = editTodo;
    if (title) {
      updateTodo(editTodo);
      handleEdit();
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        value={editTodo.title}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditInput;
