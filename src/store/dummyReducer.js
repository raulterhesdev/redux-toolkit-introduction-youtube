import { addBook } from './actions/booksActions';

console.log(addBook.toString());

console.log(`Action type: ${addBook}`);

console.log(addBook());

console.log(addBook('Book'));

// shall be deleted when the real reducers are created
const initialState = { test: 'It works' };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
