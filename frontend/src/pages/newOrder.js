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
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <form>
                <table className={styles.table}>

                    <thead>
                        <tr>
                            <th> Ngày đặt</th>
                            <th>Khách hàng</th>
                            <th> Tổng tiền</th>
                            <th>Nhận đơn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => handleRowClick('1')} className={styles.clickableRow}>
                            <td>23/11/2023</td>
                            <td>Nguyễn Văn Thái</td>
                            <td>-</td>
                            <td><button className={styles.btnConfirmOrder}></button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default NewOrder;
