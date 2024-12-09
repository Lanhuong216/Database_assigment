import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/Orders.module.scss'
const NewOrder = () => {
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <form>
                <table className={styles.table}>

                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th> Ngày đặt</th>
                            <th>Khách hàng</th>
                            <th> Tổng tiền</th>
                            <th>Nhận đơn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12345</td>
                            <td>23/11/2023</td>
                            <td>Nguyễn Văn A</td>
                            <td>Đang giao</td>
                            <td><input type="radio"></input></td>
                        </tr>
                        <tr>
                            <td>#12345</td>
                            <td>23/11/2023</td>
                            <td>Nguyễn Văn A</td>
                            <td>203.000 VND</td>
                            <td><input type="radio"></input></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default NewOrder;
