import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatService from "./chatService";

//Get user from localstorage
const chat = JSON.parse(localStorage.getItem("chat"));

const initialState = {
  chat: chat ? chat : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

//get chat
export const getchat = createAsyncThunk("chat/getchat", async (thunkAPI) => {
  try {
    return await chatService.getchat();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getchat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getchat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chat = action.payload;
      })
      .addCase(getchat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.chat = null;
      });
  }
});

const { actions, reducer } = chatSlice;
export const { reset } = actions;
export default reducer;
