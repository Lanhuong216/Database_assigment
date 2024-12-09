import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <div className="summary">
        <div className="summary-item">
          <span className="icon">💰</span>
          <span>Doanh thu</span>
          <span>0 VND</span>
        </div>
        <div className="summary-item">
          <span className="icon">👜</span>
          <span>Khách hàng</span>
          <span>0</span>
        </div>
        <div className="summary-item">
          <span className="icon">👤</span>
          <span>Đơn hàng</span>
          <span>0</span>
        </div>
      </div>
      <div className="chart">
        <h2>Tổng quan báo cáo</h2>
        <div className="chart-placeholder">Biểu đồ báo cáo</div>
      </div>
      <div className="settings">
        <label>
          <input type="radio" name="settings" />
          Thiết lập thời gian không nhận đơn online
        </label>
      </div>
    </div>
  );
};

export default Overview;
