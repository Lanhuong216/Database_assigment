import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/addProduct.module.scss';
import { useNavigate } from "react-router-dom";
function EmpInfo() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={content}>
        <h1>Tạo sản phẩm</h1>
        <div className={form-container}>
            <div className={Product}>
                <div className={form-group}>
                    <label for="product-name">Tên sản phẩm</label>
                    <input type="text" id="product-name"></input>
                </div>

                <div className={form-group}>
                    <label for="product-details">Chi tiết sản phẩm</label>
                    <textarea id="product-details" rows="4"></textarea>
                </div>

                <div className={form-group}>
                    <label for="material">Chất liệu / Hướng dẫn sử dụng</label>
                    <textarea id="material" rows="4"></textarea>
                </div>
            </div>

            <div className={radio-group}>
                <div className={radio-group1}>
                    <p>Trạng thái</p>
                    <label><input type="radio" name="status" value="hiển thị"></input> Hiển thị</label>
                    <label><input type="radio" name="status" value="ẩn"></input> Ẩn</label>
                </div>

                <div className={radio-group2}>
                    <p>Phân loại</p>
                    <label><input type="radio" name="category" value="quần"></input> Quần</label>
                    <label><input type="radio" name="category" value="áo"></input> Áo</label>
                    <div className="supplier">
                        <p>Nhà cung cấp</p>
                        <input type="text" id="supplier"></input>
                    </div>
                </div>
            </div>
        </div>

        <div className={form-group3}>
            <label>Ảnh sản phẩm</label>
            <label for="image-upload"><button className={image-upload}>Thêm ảnh sản phẩm</button></label>
        </div>

        <div className={create-table}>
            <label>Phiên bản</label>
            <label for="version"><button className={version}>Thêm phiên bản</button></label>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className={cancel}><button className={button}>Quay lại</button></div>
        <div className={save}><button className={button}>Lưu</button></div>
    </div>
        </>
    )
}
export default AddPoduct;