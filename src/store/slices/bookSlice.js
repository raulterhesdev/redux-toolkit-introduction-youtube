import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook(state, action) {
    //   state.books.push(action.payload);
    // },
    addBook: {
      reducer: (state, action) => {
        state.books.push(action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            createdAt: new Date(),
          },
        };
      },
    },
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      state.books = [];
    });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
