import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/Orders.module.scss'
import { useNavigate } from 'react-router-dom';
const NewOrder = () => {
    const navigate = useNavigate();

    const handleRowClick = (order_id) => {
        navigate(`/neworder/${order_id}`); // Điều hướng tới trang chi tiết của khách hàng
    };
    return (
        <>
            <Navbar />
            <h1 className={styles.headTitle}>Cô hồn Shop</h1>
            <h1 className={styles.header}>Đơn hàng</h1>
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <form>
                <table className={styles.table}>

                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th> Ngày đặt</th>
                            <th>Khách hàng</th>
                            <th> Tổng tiền</th>
                            <th> Trạng thái</th>
                            <th>Nhận đơn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => handleRowClick('12345')} className={styles.clickableRow}>
                            <td>12345</td>
                            <td>23/11/2023</td>
                            <td>Nguyễn Văn A</td>
                            <td>1950.00 VND</td>
                            <td>Chờ xác nhận</td>
                            <td><buttom className={styles.btnConfirmOrder}></buttom></td>
                        </tr>
                        <tr onClick={() => handleRowClick('12345')} className={styles.clickableRow}>
                            <td>12345</td>
                            <td>23/11/2023</td>
                            <td>Nguyễn Văn A</td>
                            <td>203.000 VND</td>
                            <td>Chờ xác nhận</td>
                            <td><buttom className={styles.btnConfirmOrder}></buttom></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default NewOrder;
