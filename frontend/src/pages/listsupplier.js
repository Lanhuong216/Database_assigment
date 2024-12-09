import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/listsupplier.module.scss'
import { useNavigate } from 'react-router-dom';
const Listsupplier = () => {
    const navigate = useNavigate();
    const handleAddSupplier = () => {
        navigate('/supplier/add');
    };
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Danh sách nhà cung cấp</h2>
            <button className={styles.btn} onClick={handleAddSupplier}>Thêm</button>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nhà cung cấp</th>
                        <th>Điều kiện</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IVy Moda</td>
                        <td>Tên sản phẩm phải chứa từ IVy Moda<br />
                            Nhà cung cấp phải chứa từ IVy Moda </td>
                    </tr>
                    <tr>
                        <td>Elise</td>
                        <td>Tên sản phẩm phải chứa từ Elise<br />
                            Nhà cung cấp phải chứa từ Elise</td>
                    </tr>
                    <tr>
                        <td>Boran</td>
                        <td>Tên sản phẩm phải chứa từ Boran<br />
                            Nhà cung cấp phải chứa từ Boran</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Listsupplier;
