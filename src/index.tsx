import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from './theme';

// 初始化时立即应用主题（避免闪烁）
const initTheme = () => {
  try {
    const stored = localStorage.getItem('theme');
    const root = document.documentElement;
    if (stored === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  } catch (error) {
    console.error('Failed to init theme:', error);
  }
};

initTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
