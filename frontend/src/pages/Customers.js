import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/customers.module.scss';
import { useNavigate } from 'react-router-dom';

const Customers = () => {
  const navigate = useNavigate();

  const handleRowClick = (customerId) => {
    navigate(`/listcus/${customerId}`); // Điều hướng tới trang chi tiết của khách hàng
  };

  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <h2 className={styles.title}>Danh sách khách hàng</h2>
        <button className={styles.btn} onClick={() => navigate('/listcus/add')}>Thêm khách hàng</button>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Email</th>
                <th>Điện thoại</th>
                <th>Số đơn</th>
                <th>Đơn gần nhất</th>
                <th>Tổng chi</th>
              </tr>
            </thead>
            <tbody>
              {/* Hàng đầu tiên */}
              <tr onClick={() => handleRowClick('KH01')} className={styles.clickableRow}>
                <td>KH01</td>
                <td>Lê Ngọc Anh</td>
                <td>ngocanh@gmail.com</td>
                <td>+8432564981</td>
                <td>2</td>
                <td>008</td>
                <td>100000 VNĐ</td>
              </tr>
              {/* Hàng thứ hai */}
              <tr onClick={() => handleRowClick('KH02')} className={styles.clickableRow}>
                <td>KH02</td>
                <td>Nguyễn Văn A</td>
                <td>nguyenvana@gmail.com</td>
                <td>+8432564982</td>
                <td>10</td>
                <td>0005</td>
                <td>500000 VNĐ</td>
              </tr>
              {/* Hàng thứ ba */}
              <tr onClick={() => handleRowClick('KH03')} className={styles.clickableRow}>
                <td>KH03</td>
                <td>Nguyễn Văn B</td>
                <td>nguyenvanb@gmail.com</td>
                <td>+8432564983</td>
                <td>15</td>
                <td>0002</td>
                <td>800000 VNĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customers;
