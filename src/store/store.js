import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './reducers/booksReducer';
import booksReducer from './slices/bookSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: { books: booksReducer, auth: authReducer },
});

export default store;
