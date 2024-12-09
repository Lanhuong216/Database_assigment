import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/orderListExports.module.scss';
import { useNavigate } from "react-router-dom";
function orderListExports() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={content}>
        <h1>Đơn hàng 1234</h1>
        <button className={exports}>In đơn hàng</button>
        <div className={form-container}>
            <div className={chung}>
            <div className={Order}>
                <div className={head-group}>
                    <div className={head-group1}>
                        <label for="product-name">Chi tiết đơn hàng</label>
                    </div>
                    <div className={head-group2}>
                        <label for="fix"><button className={fix}>Đã xuất kho</button></label>
                    </div>
                </div>
                <hr></hr>
                <div className={body-group}>
                    <div className={product-infos}>
                        <img src="/ASSIGNMENT/public/img/ao1.png" alt="Product"></img>
                    </div>
                    <div className={product-title}>
                        <div className={ten}>
                            <label>AIRism Cotton Ribbed Polo Shirt</label>
                        </div>
                        <div className={size}>
                            <label>L / White </label>
                            <label>SKU: abc</label>
                        </div>
                    </div>
                    <div className={Product-price}>
                        <div className={gia}>
                            <label>203.000 x 1</label>
                        </div>
                        <label>Giá</label>
                        <label>Tiếp thị</label>
                        <label>Tổng cộng</label>
                    </div>
                    <div className={money}>
                        <label>203.000 VND</label>
                        <label>-0 VND</label>
                        <label>203.000 VND</label>
                    </div>
                </div>

                <div className={charge}>
                    <label>Phương thức thanh toán: Thanh toán khi nhận hàng</label>
                    <label>Thời gian xuất đơn: 00:00 12/04/2024</label>
                </div>
            </div>
        </div>

            <div className={radio-group}>
                <div className={radio-group1}>
                    <div className={font}><label>Ghi chú của khách hàng</label></div>
                    <hr></hr>
                    <label>Đơn giao về thì gọi e ra lấy nha shop</label>
                </div>

                <div className={radio-group2}>
                    <div className={font2}><label>Khách hàng</label></div>
                    <label>Nguyen Van A</label>
                    <label>1 đơn hàng</label>
                    <hr></hr>
                    
                    <div className={font2}><label>Liên hệ</label></div>
                    <label>0325648913</label>
                    <label>nguyenvanA12@gmail.com</label>
                    <hr></hr>

                    <div className={font2}><label>Địa chỉ giao hàng</label></div>
                    <label>42/3 đường TL48, phường Thạnh Lộc,</label>
                    <label>quận 12, TPHCM</label>
                </div>
            </div>
        </div>

        <div className={back}><button className={button}>Quay về</button></div>
    </div>
        </>
    )
}
s default orderListExports;