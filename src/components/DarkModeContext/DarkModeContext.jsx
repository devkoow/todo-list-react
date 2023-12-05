import { createContext, useContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();
export const useDarkMode = () => useContext(DarkModeContext); // 사용하는 곳에서 불러오기만 하면 됨

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // dark였다면 light로
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark); // 상태 업데이트
    updateDarkMode(isDark); // html에 dark를 넣을건지 아닌지 판단하는 함수
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
