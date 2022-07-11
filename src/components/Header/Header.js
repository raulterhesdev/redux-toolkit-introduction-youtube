import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRandomUserData, logout } from '../../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <h1>Personal Library</h1>
      <button onClick={() => dispatch(logout())} className='logout-btn'>
        Logout
      </button>
      <button
        onClick={() => dispatch(fetchRandomUserData())}
        className='user-btn'
      >
        Get User Data
      </button>
    </div>
  );
};

export default Header;
