import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/orderInfo.module.scss';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productApi from "../api/productApi";
import orderApi from "../api/orderApi";
function NewOrderInfo() {
    const { order_id } = useParams();
    const navigate = useNavigate();
    const productId = ['PD1', 'PD2']

    const [productList, setProductList] = useState([])
    useEffect(() => {
        let isMounted = true;

        const fetchProducts = async () => {
            try {
                let products = await Promise.all(
                    productId.map(async (id) => {
                        return await productApi.getProduct(id);
                    })
                );

                if (isMounted) {
                    console.log("Fetched Products:", products);
                    setProductList(products);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();

        return () => {
            isMounted = false; // Cleanup
        };
    }, []);

    const formData = [
        { productId: 'PD1', size: 'M', color: 'Red', quantity: 2, customer_name: 'Nguyễn Văn Thái', phone_number: '0339863207', email: "nguyenvanthai@gmail.com", address: 'BRVT' },
        { productId: 'PD2', size: 'L', color: 'Red', quantity: 2, customer_name: 'Nguyễn Văn Thái', phone_number: '0339863207', email: "nguyenvanthai@gmail.com", address: 'BRVT' }
    ]

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await orderApi.post(formData); // Replace with your API endpoint
            alert("Dữ liệu đã được lưu thành công!");
            navigate("/listorder");
            alert("Nhận đơn thành công")
        } catch (error) {
            console.error("Error:", error);
            alert("Đã xảy ra lỗi khi lưu dữ liệu!");
        }
    };
    return (
        <>
            <Navbar />
            <div className={styles.title}>Đơn hàng {order_id}</div>

            <button className={styles.delete_button}>In đơn hàng</button>
            <form onSubmit={handleSubmit}>
                <button type="submit" className={styles.btn} onClick={() => navigate(`/listorder`)}>Nhận đơn</button>
                <div className={styles.content}>
                    <div className={styles.leftitem}>
                        <h4>Chi tiết đơn hàng</h4>
                    </div>
                    <hr />
                    <div className={styles.detail}>
                        {productList.map((data, index) => {
                            return (
                                <>
                                    <div className={styles.leftdetail}>
                                        <label>{formData[index].size} / {formData[index].color}: {formData[index].size} x {formData[index].quantity}</label>
                                        <label>ID Sản phẩm: {(data[0].product_id)}</label>
                                        <label>Tên sản phẩm: {(data[0].describle)}</label>
                                    </div>
                                    <div className={styles.centerdetail}>
                                        <label>Giá : {(data[0].sell_price_per_product)}</label>

                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className={styles.content2}>
                        <h3>Ghi chú</h3>
                        <p>Không có ghi chú</p>
                    </div>
                    <div className={styles.content3}>
                        <h3>Khách hàng: </h3>
                        <p>{formData[0].customer_name}</p>
                        <hr />

                        <h4>Liên hệ</h4>
                        <p>{formData[0].phone_number}</p>
                        <p>{formData[0].address}</p>
                        <p>{formData[0].email}</p>
                        <hr />

                    </div>
                </div>
            </form>
        </>
    );
}
export default NewOrderInfo;