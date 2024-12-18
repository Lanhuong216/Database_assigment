import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/orderInfo.module.scss';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import orderApi from "../api/orderApi";
function OrderInfo() {
    const { order_id } = useParams();
    const navigate = useNavigate();

    const [orderInfo, setOrderInfo] = useState([])

    useEffect(() => {
        const fetchOrdInfo = async () => {
            const emp = await orderApi.getSpecificOrder(order_id);
            setOrderInfo(emp)
            console.log(emp)
        }
        fetchOrdInfo();
    }, [])
    let num = 0;
    return (
        <>
            <Navbar />
            <div className={styles.title}>Đơn hàng {order_id}</div>
            <div className={styles.btn}>Nhận đơn</div>
            <button className={styles.delete_button}>In đơn hàng</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.leftitem}>
                        <h4>Chi tiết đơn hàng</h4>
                    </div>
                    <hr />
                    <div className={styles.detail}>
                        <h3>{order_id}</h3>
                        {orderInfo.map((data) => {
                            num++;
                            return (
                                <>
                                    <div className={styles.leftdetail}>
                                        <label>{data.product_size} / {data.product_color} : {data.product_size} x {data.product_quantity}</label>
                                        <label>ID Sản phẩm: {data.product_id}</label>
                                    </div>
                                    <div className={styles.centerdetail}>
                                        <label>Giá : {data.total_price}</label>

                                    </div>

                                </>
                            )
                        })}
                        <div className={styles.statusOrd}>
                            <h7>Phương thức thanh toán: {JSON.stringify(orderInfo) === "1" ? "Tiền mặt" : "Chuyển khoản"}</h7>
                            <label>Tiếp thị: -0 VND</label>
                            <label>Tổng cộng: {JSON.stringify(orderInfo[0].total_price)}</label>
                        </div>
                    </div>

                    <div className={styles.content2}>
                        <h3>Ghi chú</h3>
                        <p>Không có ghi chú</p>
                    </div>

                    <div className={styles.content3}>
                        <h3>Khách hàng: </h3>
                        <p>{JSON.stringify(orderInfo[0].customer_name)}</p>
                        <p>Số đơn: {num}</p>
                        <hr />

                        <h4>Liên hệ</h4>
                        <p>{JSON.stringify(orderInfo[0].customer_phone)}</p>
                        <hr />

                    </div>
                </div>
            </form>
        </>
    );
}
export default OrderInfo;