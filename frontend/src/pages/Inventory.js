import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/inventory.module.scss'
import { useNavigate } from 'react-router-dom';
const Inventory = () => {
  const navigate = useNavigate();
  const handleReturnProduct = () => {
    navigate('/listproduct');
  };
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <h2 className={styles.title}>Quản lý kho</h2>
        <button className={styles.btn} onClick={handleReturnProduct}>Xem sản phẩm</button>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Số lượng tồn</th>
                <th>Cập nhật số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0001</td>
                <td>AIRism Cotton Ribbed Polo Shirt</td>
                <td>200,000 VND</td>
                <td>Có sẵn</td>
                <td>100</td>
                <td >
                  <form>
                    <input type="text" id="quantity"></input>
                    <button className={styles.add}>Thêm</button>
                  </form>

                </td>
              </tr>
              <tr>
                <td>0002</td>
                <td>AIRism Cotton Ribbed Polo Shirt</td>
                <td>500,000 VND</td>
                <td>Có sẵn</td>
                <td>100</td>
                <td >
                  <form>
                    <input type="text" id="quantity"></input>
                    <button className={styles.add}>Thêm</button>
                  </form>

                </td>
              </tr>
              <tr>
                <td>0003</td>
                <td>AIRism Cotton Ribbed Polo Shirt</td>
                <td>500,000 VND</td>
                <td>Có sẵn</td>
                <td>100</td>
                <td >
                  <form>
                    <input type="text" id="quantity"></input>
                    <button className={styles.add}>Thêm</button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>

  );
};

export default Inventory;
