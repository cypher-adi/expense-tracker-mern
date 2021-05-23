import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <>
      <h2>
        Expense Tracker
        <img src={logo} width='50' style={{ float: 'right' }} alt='' />
      </h2>
    </>
  );
};

export default Header;
