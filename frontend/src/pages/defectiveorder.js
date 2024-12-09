import styles from '../styles/defectiveorder.module.scss'
import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
const Defective = () => {
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
                        <th> Tổng tiền</th>
                        <th> Lý do</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12345</td>
                        <td>23/11/2023</td>
                        <td>Nguyễn Văn A</td>
                        <td>203.000 VND</td>
                        <td>Không hoàn tất</td>
                    </tr>
                    <tr>
                        <td>#12346</td>
                        <td>23/11/2023</td>
                        <td>Nguyễn Văn B</td>
                        <td>203.000 VND</td>
                        <td>Hàng lỗi</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Defective;