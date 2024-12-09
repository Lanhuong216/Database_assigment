import React from 'react';

const Inventory = () => {
  return (
    <div>
      <h2>Quản lý kho</h2>
      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng tồn</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Áo thun</td>
            <td>100</td>
            <td>200,000 VND</td>
          </tr>
          <tr>
            <td>Quần jeans</td>
            <td>50</td>
            <td>500,000 VND</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
