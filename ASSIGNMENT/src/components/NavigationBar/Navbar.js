import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header";
function Navbar() {
    let navigate = useNavigate()
    return (
        <>
            <Header />
            <div className={styles.navbar}>

                <ul className={styles.navbar_menu}>
                    <li className={styles.menu_item} onClick={() => navigate(`/`)}>
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
                            <li>Danh sách sản phẩm</li>
                            <li>Nhà cung cấp sản phẩm</li>
                            <li>Quản lý kho</li>
                        </ul>
                    </li>
                    <li className={styles.menu_item}>
                        Khách hàng
                    </li>
                    <li className={styles.menu_item}>
                        Nhân viên
                    </li>
                    <li className={styles.menu_item}>
                        Tiếp thị
                    </li>
                    <li className={styles.menu_item}>
                        Báo cáo
                    </li>
                </ul>
            </div>
        </>

    );
};

export default Navbar;
