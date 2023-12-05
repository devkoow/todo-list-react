import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]); // AddTodo의 handleSubmit -> onAdd로 전달
  const handleUpdate = (updated) => {
    // 업데이트되면 업데이트된 todo가 적용되고, 아니면 그냥 원래 todo 적용
    // t는 todo를 줄여서 적은 것
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    // 삭제할 todo의 id와 같은 todo만 지우고 새로운 todos로 필터링
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  const filtered = getFilterdItems(todos, filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilterdItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
