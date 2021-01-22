import { createSlice } from '@reduxjs/toolkit';

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
});

console.log(booksSlice);

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
