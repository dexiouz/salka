import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginUserData: {},
  tasks: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginUserData(state, action) {
      state.loginUserData = action.payload;
    },
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});
export const {setLoginUserData, setTasks} = userSlice.actions;
export default userSlice.reducer;
