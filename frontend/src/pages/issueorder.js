import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/issueorder.module.scss'
const Issueorder = () => {
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th> Ngày xuất kho</th>
                        <th>Ngày nhập hàng</th>
                        <th>Số sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12345</td>
                        <td>23/11/2023</td>
                        <td>23/10/2023</td>
                        <td>203</td>
                    </tr>
                    <tr>
                        <td>#12346</td>
                        <td>23/11/2023</td>
                        <td>23/10/2023</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Issueorder;
