import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/orderInfo.module.scss';
import { useNavigate } from "react-router-dom";
function OrderInfo() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={styles.title}>Đơn hàng 1234</div>
            <button className={styles.delete_button} onClick={() => navigate(`/listemp/deactive`)}>In đơn hàng</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.leftitem}>
                        <h4>Chi tiết đơn hàng</h4>
                    </div>
                    <div className={styles.rightitem}>
                        <h6>Dã nhận</h6>
                    </div>
                    <hr></hr>

                    <div className={styles.detail}>
                        <h3>AIRism Cotton Ribbed Polo Shirt</h3>
                        <div className={styles.leftdetail}>
                            <label>L / White </label>
                            <label>SKU: abc</label>
                        </div>
                        <div className={styles.centerdetail}>
                            <h5>203.000 x 1</h5>
                            <label>Giá</label>
                            <label>Tiếp thị</label>
                            <label>Tổng cộng</label>
                        </div>
                        <div className={styles.rightdetail}>
                            <h5>203.000 VND</h5>
                            <h5>-0 VND</h5>
                            <h5>203.000 VND</h5>
                        </div>
                        <div className={styles.statusOrd}>
                            <h7>Phương thức thanh toán:</h7>
                            <p>Đã thanh toán</p>
                        </div>
                    </div>

                    <div className={styles.content2}>
                        <h3>Ghi chú</h3>
                        <p>Đơn giao về thì gọi e ra lấy nha shop</p>
                    </div>

                    <div className={styles.content3}>
                        <h3>Khách hàng</h3>
                        <p>Nguyen Van A</p>
                        <p>1 đơn hàng</p>
                        <hr></hr>

                        <h4>Liên hệ</h4>
                        <p>0325648913</p>
                        <p>nguyenvanA12@gmail.com</p>
                        <hr></hr>

                        <h4>Liên hệ</h4>
                        <p>42/3 đường TL48, phường Thạnh Lộc, quận 12, TPHCM</p>
                    </div>
                </div>
            </form>
        </>
    )
}
export default OrderInfo;