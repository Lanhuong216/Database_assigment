import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/EditAddProduct.module.scss';
import { useNavigate } from "react-router-dom";
function EditAddProduct() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={content}>
        <h1>ALRism Cotton Ribbed Polo Shirt</h1>
        <div className={form-container}>
            <div className={Product}>
                <div className={form-group}>
                    <label for={product-name}>Tên sản phẩm</label>
                    <input type="text" id="product-name" value={ALRism Cotton Ribbed Polo Shirt}></input>
                </div>

                <div className={form-group}>
                    <label for={product-details}>Chi tiết sản phẩm</label>
                    <textarea id="product-details" rows={4}></textarea>
                </div>

                <div className={form-group}>
                    <label for={material}>Chất liệu / Hướng dẫn sử dụng</label>
                    <textarea id="material" rows={4}></textarea>
                </div>
            </div>

            <div className={radio-group}>
                <div className={radio-group1}>
                    <p>Trạng thái</p>
                    <label><input type="radio" name="status" value={hiển thị}></input> Hiển thị</label>
                    <label><input type="radio" name="status" value={ẩn}></input> Ẩn</label>
                </div>

                <div className={radio-group2}>
                    <p>Phân loại</p>
                    <label><input type="radio" name="category" value={quần}></input> Quần</label>
                    <label><input type="radio" name="category" value={áo}></input> Áo</label>
                    <div className={supplier}>
                        <p>Nhà cung cấp</p>
                        <input type="text" id={supplier}></input>
                    </div>
                </div>
            </div>
        </div>

        <div className={form-group3}>
            <label>Ảnh sản phẩm</label>
            <label for={image-upload}><button className={image-upload}>Thêm ảnh sản phẩm</button></label>
                <img src="/ASSIGNMENT/public/img/ao1.png" alt={Ao mau 1}></img>
                <img src="/ASSIGNMENT/public/img/ao2.png" alt={Ao mau 2}></img>
                <img src="/ASSIGNMENT/public/img/ao3.png" alt={Ao mau 3}></img>
                <img src="/ASSIGNMENT/public/img/ao4.png" alt={Ao mau 4}></img>
        </div>

        <div className={create-table}>
            <label>Phiên bản</label>
            <label for={version}><button className={version}>Thêm phiên bản</button></label>
            <table>
                <thead>
                    <tr>
                        <th>Màu sắc</th>
                        <th>Kích thước</th>
                        <th>Giá</th>
                        <th>SKU</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trắng</td>
                        <td><img src="/ASSIGNMENT/public/img/ao1.png" alt={mau1}></img> S</td>
                        <td>203.000 VND</td>
                        <td>abc</td>
                        <td><button className={remove-btn}>Xóa</button><button className={remove-btn}>Sửa</button></td>
                    </tr>

                    <tr>
                        <td>Trắng</td>
                        <td><img src="/ASSIGNMENT/public/img/ao1.png" alt={mau1}></img> S</td>
                        <td>203.000 VND</td>
                        <td>abc</td>
                        <td><button className={remove-btn}>Xóa</button><button className={remove-btn}>Sửa</button></td>
                    </tr>

                <tr>
                    <td>Trắng</td>
                    <td><img src="/ASSIGNMENT/public/img/ao1.png" alt={mau1}></img> S</td>
                    <td>203.000 VND</td>
                    <td>abc</td>
                    <td><button className={remove-btn}>Xóa</button><button className={remove-btn}>Sửa</button></td>
                </tr>

                <tr>
                    <td>Trắng</td>
                    <td><img src="/ASSIGNMENT/public/img/ao1.png" alt={mau1}></img> S</td>
                    <td>203.000 VND</td>
                    <td>abc</td>
                    <td><button className={remove-btn}>Xóa</button><button className={remove-btn}>Sửa</button></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className={cancel}><button className={button}>Quay lại</button></div>
    </div>
        </>
    )
}
export default EditAddProduct;