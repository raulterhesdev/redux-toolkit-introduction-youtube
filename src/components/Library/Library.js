import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../../store/actions/booksActions';

const Library = () => {
  const bookList = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id));
  };

  const bookTable = bookList.map((book) => (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <button className='delete' onClick={() => deleteBookHandler(book.id)}>
        x
      </button>
    </tr>
  ));

  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        {bookTable}
      </table>
    </div>
  );
};

export default Library;
