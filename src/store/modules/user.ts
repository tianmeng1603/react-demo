// 用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit';

const userStore = createSlice({
  name: 'user',
  // 初始状态
  initialState: {
    token: '',
  },
  // 修改状态的函数
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// 解构
const { setToken } = userStore.actions;
const userReducer = userStore.reducer;

export { setToken };
export default userReducer;