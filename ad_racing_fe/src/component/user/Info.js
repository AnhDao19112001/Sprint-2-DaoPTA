import {useEffect, useState} from "react";
import {getIdByUserName, infoAppUserByJwtToken} from "../../service/user/UserService";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../../css/Info.css";
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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
                            <h2 className="h3 mb-4 mt-2 page-title">Thông tin cá nhân</h2>
                            <div className="my-4">
                                <form>
                                    <div className="row mt-5 align-items-center">
                                        <div className="col-md-3 text-center mb-5">
                                            <div className="avatar avatar-xl">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."
                                                     className="avatar-img rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row align-items-center">
                                                <div className="col-md-7">
                                                    <h4 className="mb-1">{customer.fullName}</h4>
                                                    {/*<p className="small mb-3" style={{color:"black"}}><span className="badge badge-dark">{customer.address}</span>*/}
                                                    {/*</p>*/}
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-7">
                                                    <p className="text-muted-1">
                                                        Cảm ơn vì đã dành niềm tin vào thương hiệu của chúng tôi. Thành công mà chúng tôi đạt được phụ thuộc vào sự tin tưởng của những vị khách hàng như bạn.

                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <p className="small mb-0 text-muted-1">Tên đăng nhập: {customer.userName}</p>
                                                    <p className="small mb-0 text-muted-1">Email: {customer.email}</p>
                                                    <p className="small mb-0 text-muted-1">Số điện thoại: {customer.phone}</p>
                                                    <p className="small mb-0 text-muted-1">Địa chỉ: {customer.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4"/>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="firstname">Họ và tên</label>
                                            <input type="text" id="firstname" className="form-control"
                                                   placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4"
                                               placeholder=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress5">Địa chỉ</label>
                                        <input type="text" className="form-control" id="inputAddress5"
                                               placeholder=""/>
                                    </div>
                                    <hr className="my-4"/>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="inputPassword4">Mật khẩu cũ</label>
                                                <input type="password" className="form-control" id="inputPassword5"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword5">Mật khẩu mới</label>
                                                <input type="password" className="form-control" id="inputPassword5"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword6">Nhập lại mật khẩu</label>
                                                <input type="password" className="form-control" id="inputPassword6"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-2">Yêu cầu về mật khẩu</p>
                                            <p className="small text-muted mb-2">Để tạo mật khẩu mới, bạn phải đáp ứng tất cả những điều sau đây:</p>
                                            <ul className="small text-muted pl-4 mb-0">
                                                <li>Tối thiểu 6 ký tự</li>
                                                <li>Ít nhất có 1 ký tự đặc biệt</li>
                                                <li>Ít nhất có 1 số</li>
                                                <li>Không thể giống với mật khẩu trước đó</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Lưu</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer/>
            </>
        )
    )
}
export default Info;