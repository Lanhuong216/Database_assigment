import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Chi nhánh 20</h1>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm..." />
        <button className="icon-btn">&#128269;</button>
      </div>
    </div>
  );
};

export default Header;
