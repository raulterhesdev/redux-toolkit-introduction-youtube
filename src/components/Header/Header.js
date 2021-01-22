import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <h1>Personal Library</h1>
      <button onClick={() => dispatch(logout())} className='logout-btn'>
        Logout
      </button>
    </div>
  );
};

export default Header;
