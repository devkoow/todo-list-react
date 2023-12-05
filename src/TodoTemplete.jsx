import React from 'react';
import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoFooter from './components/TodoFooter';

export default function ToDoTemplete() {
  return (
    <TodoBox>
      <TodoHead />
      <TodoList />
      <TodoFooter />
    </TodoBox>
  );
}

function TodoBox({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#3e5b80',
        borderRadius: '10px',
        color: 'white',
        minHeight: '600px',
        maxWidth: '480px',
        margin: '1rem',
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
}
