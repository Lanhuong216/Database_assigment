import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Nét</div>
      <ul>
        <li>Tổng quan</li>
        <li>Đơn hàng</li>
        <li>Sản phẩm</li>
        <li>Khách hàng</li>
        <li>Nhân viên</li>
        <li>Tiếp thị</li>
        <li>Báo cáo</li>
        <li>Đăng xuất</li>
      </ul>
    </div>
  );
};

export default Sidebar;