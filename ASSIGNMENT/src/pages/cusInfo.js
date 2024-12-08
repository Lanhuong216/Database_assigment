import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/cusInfo.module.scss';
import { useNavigate } from "react-router-dom";
function CusInfo() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={styles.title}>Le Ngoc Anh</div>
            <button className={styles.delete_button} onClick={() => navigate(`/listcus/deactive`)}>Vô hiệu hóa</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Le Ngoc Anh</h3>
                        <p>111 đường ABC, phường Cẩm Thành, Thành phố Cẩm Phả, Quảng Ninh, Vietnam</p>

                        <label> Ghi chú</label>
                        <textarea placeholder="Nhập ghi chú về khách hàng"></textarea>

                        <hr></hr>
                        <div className={styles.leftitem}>
                            <h5>Đơn hàng mới nhất</h5>
                            <p> 1234</p>
                        </div>
                        <div className={styles.rightitem}>
                            <h5>Tổng chi tiêu </h5>
                            <p>503.000 VND</p>
                        </div>

                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Đơn hàng gần đây</h3>
                    <div className={styles.order}>
                        <h5>Đơn 1234</h5>
                        <p>203.000 VND</p>
                        <div className={styles.orderitem}>
                            <p>Chưa thanh toánn</p>
                            <p>Chưa chuyển</p>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <h5>Đơn 0012</h5>
                        <p>300.000 VND</p>
                        <div className={styles.orderitem}>
                            <p>Đã thanh toán</p>
                            <p>Đã giao hàng</p>
                        </div>
                    </div>
                </div>
                <div className={styles.content3}>
                    <h3>Liên hệ</h3>
                    <label>Email</label>
                    <input type="email" defaultValue={"ngocanh@gmail.com"} id="email"></input>
                    <label>Số điện thoại</label>
                    <input type="tel" defaultValue={"+8432564981"} id="tel"></input>
                    <label>Địa chỉ</label>
                    <textarea id="addr" defaultValue={"111 đường ABC, phường Cẩm Thành, Thành phố Cẩm Phả, Quảng Ninh, Vietnam"}></textarea>
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listcus`)}></input>
            </form>
        </>
    )
}
export default CusInfo;