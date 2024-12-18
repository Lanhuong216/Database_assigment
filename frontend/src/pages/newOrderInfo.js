import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/orderInfo.module.scss';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productApi from "../api/productApi";
function NewOrderInfo() {
    const { order_id } = useParams();
    const navigate = useNavigate();
    const productId = ['00000001', '00000002']
    const [productList, setProductList] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch all products using Promise.all
                const products = await Promise.all(
                    productId.map(async (id) => {
                        const product = await productApi.getProduct(id);
                        return product;
                    })
                );
                setProductList(products); // Update the state with all fetched products
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);
    return (
        <>
            <Navbar />
            {/*             {productList.map((data, index) => {
                return (
                    <h2 key={index}>{JSON.stringify(data)}</h2> // Map through productList
                );
            })} */}
            <div className={styles.title}>Đơn hàng {order_id}</div>
            <div className={styles.btn} onClick={() => navigate(`/listorder`)}>Nhận đơn</div>
            <button className={styles.delete_button}>In đơn hàng</button>
            <form>
                <div className={styles.content}>
                    <div className={styles.leftitem}>
                        <h4>Chi tiết đơn hàng</h4>
                    </div>
                    <hr />
                    <div className={styles.detail}>
                        {productList.map((data) => {
                            return (
                                <>
                                    <div className={styles.leftdetail}>
                                        <label>M / Red: M x 2</label>
                                        <label>ID Sản phẩm: {data.product_id}</label>
                                    </div>
                                    <div className={styles.centerdetail}>
                                        <label>Giá : {data.sell_price_per_product}</label>

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
                        <p>Nguyễn Văn Mãi</p>
                        <hr />

                        <h4>Liên hệ</h4>
                        <p>0328368604</p>
                        <hr />

                    </div>
                </div>
            </form>
        </>
    );
}
export default NewOrderInfo;