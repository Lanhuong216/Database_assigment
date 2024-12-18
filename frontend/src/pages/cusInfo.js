import React from 'react';
import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/cusInfo.module.scss';
import { useNavigate, useParams } from "react-router-dom";

function CusInfo() {
    const navigate = useNavigate();
    const { customerId } = useParams(); // Lấy customerId từ URL

    // Dữ liệu mẫu (thay bằng API thực nếu có)
    return (
        <>
            <Navbar />
            {/*  <div className={styles.title}>{customer.name || "Thông tin khách hàng"}</div>
            <button className={styles.delete_button} onClick={() => alert("Vô hiệu hóa khách hàng!")}>Vô hiệu hóa</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>{customer.name}</h3>
                        <p>{customer.address}</p>

                        <label> Ghi chú</label>
                        <textarea placeholder="Nhập ghi chú về khách hàng"></textarea>

                        <hr />
                        <div className={styles.leftitem}>
                            <h5>Đơn hàng mới nhất</h5>
                            <p>{customer.latestOrder}</p>
                        </div>
                        <div className={styles.rightitem}>
                            <h5>Tổng chi tiêu</h5>
                            <p>{customer.totalSpent}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Đơn hàng gần đây</h3>
                    {customer.recentOrders?.map(order => (
                        <div className={styles.order} key={order.id}>
                            <h5>Đơn {order.id}</h5>
                            <p>{order.amount}</p>
                            <div className={styles.orderitem}>
                                <p>{order.status}</p>
                                <p>{order.shipped}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listcus`)} />
            </form> */}
        </>
    );
}

export default CusInfo;
