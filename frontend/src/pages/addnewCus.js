import Navbar from "../components/NavigationBar/Navbar";
import styles from '../styles/addnewCus.module.scss';
import { useNavigate } from "react-router-dom";
import customerApi from "../api/customerApi";
import { useState, useEffect } from "react";
function AddNewCus() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        dob: "",
        tel: "",
        sex: "",
        marketing: false,
        nation: "Việt Nam",
        province: "",
        district: "",
        ward: "",
        addr: "",
        note: "",
    });


    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });
    };
    const [orderDList, setCusList] = useState([])
    useEffect(() => {
        const fetchOrdD = async () => {
            const emp = await customerApi.post();
            setCusList(emp)
        }
        fetchOrdD();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // This is your `data`
        navigate(`/listcus`);
    };

    return (
        <>
            <Navbar />
            <div className={styles.title}>Thêm khách hàng</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <h3>Thông tin cơ bản</h3>
                        <div className={styles.leftitem}>
                            <label>Họ</label>
                            <input type="text" id="fname" placeholder="Nhập họ khách hàng" value={formData.fname}
                                onChange={handleInputChange}></input>
                            <label>Email</label>
                            <input type="email" id="enail" placeholder="Nhập email khách hàng" value={formData.email}
                                onChange={handleInputChange}></input>
                            <label>Ngày sinh</label>
                            <input type="date" id="dob" placeholder="Nhập Ngày sinh khách hàng" value={formData.dob}
                                onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.rightitem}>
                            <label>Tên</label>
                            <input type="text" id="lname" placeholder="Nhập tên khách hàng" value={formData.lname}
                                onChange={handleInputChange}></input>
                            <label>Số điện thoại</label>
                            <input type="tel" id="tel" placeholder="Nhập số điện thoại khách hàng" value={formData.tel}
                                onChange={handleInputChange}></input>
                            <label>Giới tính</label>
                            <select id="sex" value={formData.sex}
                                onChange={handleInputChange}>
                                <option value=""></option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>
                        <div className={styles.marketing}>
                            <input type="checkbox" id="marketing" value={formData.marketing}
                                onChange={handleInputChange}></input>
                            <label>Khách hàng muốn nhận thông tin tiếp thị</label>
                        </div>
                    </div>
                </div>
                <div className={styles.content2}>
                    <h3>Thông tin liên hệ</h3>
                    <div className={styles.leftitem2}>

                        <label>Quốc gia</label>
                        <input type="text" id="nation" defaultValue={"Việt Nam"}></input>
                        <label>Quận/Huyện</label>
                        <input type="text" id="district" placeholder="Nhập quận/huyện"></input>
                    </div>
                    <div className={styles.rightitem2}>
                        <label>Tỉnh/Thành phố</label>
                        <input type="text" id="province" placeholder="Nhập tỉnh/thành phố"></input>
                        <label>Phường/Xã</label>
                        <input type="text" id="ward" placeholder="Nhập phường/xã"></input>
                    </div>
                    <div className={styles.addr}><label>Địa chỉ</label>
                        <textarea id="addr" placeholder="Nhập địa chỉ" ></textarea>
                    </div>
                </div>
                <div className={styles.content3}>
                    <h3>Ghi chú</h3>
                    <textarea id="note" placeholder="Nhập ghi chú về khách hàng"></textarea>
                </div>
                <input type="submit" value="Lưu" className={styles.save_button} onClick={() => navigate(`/listcus`)}></input>
            </form>
        </>
    )
}
export default AddNewCus;