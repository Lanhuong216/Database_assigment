import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import styles from '../styles/issueorder.module.scss';
import { useState, useEffect } from 'react';
import orderApi from '../api/orderApi';
const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${hours}:${minutes}  ${day}/${month}/${year}`;
};
const Issueorder = () => {
    const [issueorderList, setIssueOrderDList] = useState([])
    useEffect(() => {
        const fetchIssueOrd = async () => {
            const emp = await orderApi.getExportOrder();
            setIssueOrderDList(emp)
        }
        fetchIssueOrd();
    }, [])
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Danh sách đơn hàng</h2>
            <table className={styles.table}>
                <thead>

                    <tr>
                        <th>Mã đơn hàng</th>
                        <th> Ngày xuất kho</th>
                        <th>Ngày nhập hàng</th>
                        <th>Số sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {issueorderList.map((data) => {
                        return (
                            <tr>
                                <td>{data.product_id}</td>
                                <td>{formatDateTime(data.import_date)}</td>
                                <td>{formatDateTime(data.export_date)}</td>
                                <td>{data.total_product}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    );
};

export default Issueorder;
