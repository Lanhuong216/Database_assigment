import React from 'react';

const Marketing = () => {
  return (
    <div>
      <h2>Danh sách chiến dịch tiếp thị</h2>
      <table>
        <thead>
          <tr>
            <th>Tên chiến dịch</th>
            <th>Ngày bắt đầu</th>
            <th>Kết quả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Khuyến mãi Tết</td>
            <td>01/01/2024</td>
            <td>Thành công</td>
          </tr>
          <tr>
            <td>Giảm giá 20%</td>
            <td>15/12/2023</td>
            <td>Đang chạy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marketing;
