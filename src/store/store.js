import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from './dummyReducer';

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
  reducer: { dummyReducer },
});

export default store;
