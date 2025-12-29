import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user';
import themeReducer from './modules/theme';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

// 导出类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;