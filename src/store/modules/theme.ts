// 主题相关的状态管理
import { createSlice } from '@reduxjs/toolkit';

const themeStore = createSlice({
  name: 'theme',
  // 初始状态
  initialState: {
    theme: 'light',
  },
  // 修改状态的函数
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      // 保存到 localStorage
      localStorage.setItem('theme', action.payload);
    },
  },
});

// 解构
const { setTheme } = themeStore.actions;
const themeReducer = themeStore.reducer;

export { setTheme };
export default themeReducer;

