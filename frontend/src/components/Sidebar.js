import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Nét</div>
      <ul>
        <li><Link to="/">Tổng quan</Link></li>
        <li><Link to="/orders">Đơn hàng</Link></li>
        <li><Link to="/customers">Khách hàng</Link></li>
        <li><Link to="/marketing">Tiếp thị</Link></li>
        <li><Link to="/inventory">Quản lý kho</Link></li>
        <li><Link to="/logout">Đăng xuất</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
