import React from "react";
import styles from "./Navbar.module.scss";
import { useParams, useNavigate } from "react-router-dom"
import Header from "../Header/Header";
function Navbar() {
    let navigate = useNavigate();
    const shop_id = 20;
    return (
        <>
            <Header />
            <div className={styles.navbar}>

                <ul className={styles.navbar_menu}>
                    <li className={styles.menu_item} onClick={() => navigate(`/${shop_id}`)}>
                        Tổng quan
                    </li>
                    <li className={styles.menu_item}>
                        Đơn hàng
                        <ul className={styles.submenu}>
                            <li onClick={() => navigate(`/listorder`)}>Danh sách đơn hàng</li>
                            <li onClick={() => navigate(`/neworder`)}>Đơn hàng mới</li>
                            <li onClick={() => navigate(`/defectiveorder`)}>Đơn hàng lỗi</li>
                            <li onClick={() => navigate(`/issueorder`)}>Đơn nhập hàng</li>
                        </ul>
                    </li>
                    <li className={styles.menu_item}>
                        Sản phẩm
                        <ul className={styles.submenu}>
                            <li onClick={() => navigate(`/listproduct`)}>Danh sách sản phẩm</li>
                            <li onClick={() => navigate(`/supplier`)}>Nhà cung cấp sản phẩm</li>
                            <li onClick={() => navigate(`/inventory`)}>Quản lý kho</li>
                        </ul>
                    </li>
                    <li className={styles.menu_item} onClick={() => navigate(`/listcus`)}>
                        Khách hàng
                    </li>
                    <li className={styles.menu_item} onClick={() => navigate(`/listemp`)}>
                        Nhân viên
                    </li>
                    <li className={styles.menu_item} onClick={() => navigate(`/listmarketing`)}>
                        Tiếp thị
                    </li>

                </ul>
            </div>
        </>

    );
};

export default Navbar;
