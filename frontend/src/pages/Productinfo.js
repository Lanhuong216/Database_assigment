import styles from '../styles/productinfo.module.scss'
import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import { useNavigate } from 'react-router-dom';
const Productinfo = () => {
    const navigate = useNavigate();
    const handleCreateProduct = () => {
        navigate('/listproduct/newproduct');
    };
    return (
        <>
            <Navbar />
            <div className={styles.head}>
                <h2 className={styles.title}>Danh sách sản phẩm</h2>
                <button className={styles.btn} onClick={handleCreateProduct}>Tạo sản phẩm</button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th> Sản phẩm</th>
                        <th>Kho</th>
                        <th> Loại sản phẩm</th>
                        <th> Nhà cung cấp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#1234</td>
                        <td>AIRism Cotton Ribbed Polo Shirt</td>
                        <td>25 sản phẩm của 1 loại</td>
                        <td>Áo, Nữ</td>
                        <td>ABC</td>
                    </tr>
                    <tr>
                        <td>#1235</td>
                        <td>Broadcloth Shirt | Button Down</td>
                        <td>25 sản phẩm của 1 loại</td>
                        <td>Áo, Unisex</td>
                        <td>ABC</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Productinfo;