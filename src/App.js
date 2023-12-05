import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList.jsx/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(filters[0]); // 처음에는 all을 보여주는 상태
  return (
    <>
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
