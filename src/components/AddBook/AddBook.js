import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
// import { addBook } from '../../store/actions/booksActions';
import { addBook } from '../../store/slices/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('5');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, rating, id: nanoid() }));
  };

  return (
    <form className='add-book'>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='author'>Author</label>
        <input
          name='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='rating'>Rating</label>
        <input
          name='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type='number'
          min='1'
          max='10'
        />
      </div>
      <button onClick={addBookHandler}> Add Book</button>
    </form>
  );
};

export default AddBook;
