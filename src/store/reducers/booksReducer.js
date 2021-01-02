import { createReducer } from '@reduxjs/toolkit';
import { addBook } from '../actions/booksActions';

const initialState = { books: [] };

const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(addBook, (state, action) => {
    state.books.push(action.payload);
  });
});

export default booksReducer;
