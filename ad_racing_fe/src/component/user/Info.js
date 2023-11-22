import {useEffect, useState} from "react";
import {getIdByUserName, infoAppUserByJwtToken} from "../../service/user/UserService";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
function Info() {
    const [customer, setCustomer] = useState(null);
    const fetchData = async () => {
        try {
            const user = await getIdByUserName(infoAppUserByJwtToken(localStorage.getItem('JWT')).sub);
            setCustomer(user.data);
            console.log(user.data)
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        customer && (
            <>
                <Header/>
                <div className="form-user-account">
                    <div className="customer-form">
                        <div className="form-group">
                            <label htmlFor="name_customer">Họ Và tên</label>
                            <div>{customer.fullName}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address_customer">Địa Chỉ</label>
                            <div>{customer.address}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cccd_customer">Số điện thoại</label>
                            <div>{customer.phone}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender_customer">Email</label>
                            <div>{customer.email}</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    )
}
export default Info;