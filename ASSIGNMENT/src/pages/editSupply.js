import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/EditSuply.module.scss';
import { useNavigate } from "react-router-dom";
function EditSuply() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={content}>
      <h1>IVy Moda</h1>
        <div className={form-container}>
            <div className={Supply-detail}>
                <div className={form-group}>
                    <label for="supply-name">Tên danh mục</label>
                    <input type="text" id="supply-name" placeholder="IVy Moda" ></input>
                </div>

                <div className={form-group}>
                    <label for="supply">Chi tiết danh mục</label>
                    <textarea id="supply" rows="4"></textarea>
                </div>
            </div>

            <div className={Note}>
                <div className={Note}>
                    <p>Ghi chú</p>
                    <textarea name="note" id="notes"></textarea>
                </div>
            </div>
        </div>

        <div className={classNameify}>
            <div className={form-group1}>
                <label>Điều kiện xếp loại:</label>
                <div className={classNameification-options}>
                    <div className={classNameification-options1}>
                        <label for="request">Sản phẩm phải thỏa mãn:</label>
                    </div>

                    <div className={classNameification-options2}>
                        <label>
                            <input type="radio" name="condition" value="all" checked></input> Tất cả các điều kiện
                        </label>
                    </div>

                    <div className={classNameification-options3}>
                        <label>
                            <input type="radio" name="condition" value="some"></input> Một trong các điều kiện
                        </label>
                    </div>
                </div>
            </div>

            <div className={above}>
            <div className={form-group2}>
            <div className={product-name}>
                <label for="product-name">Tên sản phẩm chứa từ</label>
            </div>
            <div className={product1}>
                <button className={product1}>IVy Moda</button>
            </div>
            </div>

            <div className={form-group3}>
            <div className={supplier1}> 
                <label for="supplier1">Nhà cung cấp chứa từ</label>
            </div>
            <div>
                <button className={supplier}>IVy Moda</button>
            </div>
            </div>
            </div>
        </div>

        <div className={create-table}>
            <label>Sản phẩm</label>
            <label for="version"><button className={version}>Thêm sản phẩm</button></label>
            <table>
                
                <tbody>
                    <tr>
                        <td>1 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                        <td>AIRism Cotton Ribbed Polo Shirt</td>
                        <td><button className={remove-btn}>Xóa</button></td>
                    </tr>

                    <tr>
                        <td>2 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                        <td>AIRism Cotton Ribbed Polo Shirt</td>
                        <td><button className={remove-btn}>Xóa</button></td>
                    </tr>

                <tr>
                    <td>3 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                    <td>AIRism Cotton Ribbed Polo Shirt</td>
                    <td><button className={remove-btn}>Xóa</button></td>
                </tr>

                <tr>

                    <td>4 <img src="/ASSIGNMENT/public/img/ao1.png" alt="mau1"></img></td>
                    <td>AIRism Cotton Ribbed Polo Shirt</td>
                    <td><button className={remove-btn}>Xóa</button></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className={cancel}><button className={button}>Xóa danh mục</button></div>
        <div className={save}><button className={button}>Lưu</button></div>
    </div>
        </>
    )
}
export default EditSuply;