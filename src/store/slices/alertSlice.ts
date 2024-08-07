import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alertSlice',
  initialState: {
    updateState: false,
    createState: false,
    deleteState: false,
  },
  reducers: {
    updatePostState: (state, action) => {
      state.updateState = action.payload;
    },
    createPostState: (state, action) => {
      state.createState = action.payload;
    },

    deletePostState: (state, action) => {
      state.deleteState = action.payload;
    },
  },
});

export default alertSlice;
export const { updatePostState, createPostState, deletePostState } = alertSlice.actions;
