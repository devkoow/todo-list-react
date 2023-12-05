import { React, useState } from 'react';
import { v4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value); // 입력할 때마다 value를 감지
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기 -> 자동 새로고침되면 추가하자마자 날아가니까
    if (text.trim() === '') {
      return;
    }
    onAdd({ id: v4(), text, status: 'active' }); // TodoList의 handleAdd를 사용
    setText('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Add Todo"
        type="text"
        value={text}
        onChange={handleChange}
      ></input>
      <button className={styles.button}>Add</button>
    </form>
  );
}
