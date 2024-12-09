import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/Orders.module.scss'
const Orders = () => {
  return (
    <>
      <Navbar />
      <h2 className={styles.title}>Danh sách đơn hàng</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th> Ngày đặt</th>
            <th>Khách hàng</th>
            <th>Trạng thái</th>
            <th> Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>23/11/2023</td>
            <td>Nguyễn Văn A</td>
            <td>Đang giao</td>
            <td>203.000 VND</td>
          </tr>
          <tr>
            <td>#12345</td>
            <td>23/11/2023</td>
            <td>Nguyễn Văn A</td>
            <td>Đang giao</td>
            <td>203.000 VND</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Orders;
