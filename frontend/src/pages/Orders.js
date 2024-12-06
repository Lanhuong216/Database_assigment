import React from 'react';

const Orders = () => {
  return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Khách hàng</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>Nguyễn Văn A</td>
            <td>Đang giao</td>
          </tr>
          <tr>
            <td>#67890</td>
            <td>Trần Thị B</td>
            <td>Hoàn tất</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
