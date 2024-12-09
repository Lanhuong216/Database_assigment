import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/AddSupply.module.scss';
import { useNavigate } from "react-router-dom";
function AddSupply() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className={content}>
      <h1>Thêm nhà cung cấp</h1>
        <div className={form-container}>
            <div className={Supply-detail}>
                <div className={form-group}>
                    <label for="supply-name">Tên nhà cung cấp</label>
                    <input type="text" id="supply-name"></input>
                </div>

                <div className={form-group}>
                    <label for="supply">Chi tiết nhà cung cấp</label>
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

        <div className={form-group3}>
            <label>Ảnh sản phẩm</label>
            <label for="image-upload"><button className={image-upload}>Thêm sản phẩm</button></label>
        </div>

        <div className={cancel}><button className={button}>Quay lại</button></div>
        <div className={save}><button className={button}>Lưu</button></div>
        </div>
        </>
    )
}
export default AddSupply;