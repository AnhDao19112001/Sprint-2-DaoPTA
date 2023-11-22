import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOrderDetails} from "../../service/cart/Orders";
import Header from "../layout/Header";
import {getIdByUserName, infoAppUserByJwtToken} from "../../service/user/UserService";

function OrderDetail() {
    const [orderDetails, setOrderDetails] = useState([]);
    const [customer, setCustomer] = useState({});
    const fetchData = async () => {
        try {
            const user = await getIdByUserName(infoAppUserByJwtToken(localStorage.getItem('JWT')).sub);
            setCustomer(user.data);
            console.log(user.data)
        } catch (error) {
            console.error(error);
        }
    };
    const findOrderDetais = async (a) => {
        if(a && a.idOrder){
            const data = await getOrderDetails(a.idOrder);
            setOrderDetails(data);
        } else {
            console.log("aaaaaaaaa")
        }
    };
    useEffect(() => {
        findOrderDetais();
        fetchData();
    }, []);

    const currency = (money) => {
        return new Intl.NumberFormat("vi-VN").format(money);
    };

    return (
        <>
            <Header/>
            <div id="hannah" className="container">
                <div style={{marginTop: "50px"}} className=" h-auto">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <img
                            src="/20230222_175335.jpg"
                            className=" h-25 w-25 mt-5"
                        ></img>
                        <p className="col col-md-5 col-8 mb-3 text-center">
                            Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi! Vui lòng xem chi tiết
                            đơn hàng bên dưới nhé!
                        </p>
                    </div>
                </div>

                <div className="container-fluid p-1 position-relative h-auto">
                    <h1
                        className="text-center mb-5 mx-auto "
                        style={{color: "black"}}>
                        THÔNG TIN ĐƠN HÀNG
                    </h1>

                    {orderDetails.length > 0 && (
                        <div className="container-fluid w-100">
                            <div className="row">
                                <div className=" col col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                                    <div className=" d-flex flex-column justify-content-center align-items-center">
                                        <table className="table table-hover">
                                            <thead className="text-secondary">
                                            <tr className="text-center fw-bold">
                                                <td>SẢN PHẨM</td>
                                                <td>Giá (VNĐ)</td>
                                                <td>Số lượng</td>
                                                <td>Tổng (VNĐ)</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {orderDetails.length > 0 &&
                                                orderDetails.map((el, index) => {
                                                    return (
                                                        <tr key={`el_${index}`}>
                                                            <td>
                                                                <div
                                                                    className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                                                                    <img
                                                                        src={el.imageProduct}
                                                                        style={{
                                                                            width: "3.5rem",
                                                                            height: "4.0rem",
                                                                            cursor: "pointer",
                                                                        }}
                                                                    />
                                                                    <div
                                                                        style={{cursor: "pointer"}}
                                                                        className="text-center align-middle mx-2"
                                                                    >
                                                                        <div>{el.nameProduct}</div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className=" text-center align-middle fw-bold">
                                                                {currency(el.price)}
                                                            </td>
                                                            <td className="align-middle">
                                                                <div
                                                                    className=" d-flex flex-md-row flex-column justify-content-center align-items-center">
                                                                    <input
                                                                        readOnly
                                                                        type="number"
                                                                        defaultValue={el.quantityInCart}
                                                                        style={{
                                                                            width: "50px",
                                                                            height: "35px",
                                                                        }}
                                                                        name="quantity"
                                                                        className="text-center input-quantity"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-center fw-bold">
                                                                {currency(
                                                                    el.price * el.quantityInCart
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                        <div
                                            className="container-fluid d-flex flex-column align-items-center justify-content-center">
                                            <div className=" mb-3 w-75" id="confirm-order">
                                                <h3 className=" text-center" style={{color: "#119cd4"}}>
                                                    ĐỊA CHỈ NHẬN HÀNG
                                                    <img
                                                        style={{
                                                            marginLeft: "20px",
                                                            height: "60px",
                                                            width: "60px",
                                                            opacity: "20%",
                                                        }}
                                                        src="https://static.vecteezy.com/system/resources/previews/002/206/240/original/fast-delivery-icon-free-vector.jpg"
                                                    />
                                                </h3>

                                                <form>
                                                    <div
                                                        className=" d-flex flex-column justify-content-center align-items-center">
                                                        <div className=" mb-1 w-100">
                                                            <label htmlFor="name">
                                                                Tên khách hàng{" "}
                                                                <span className=" text-danger">*</span>
                                                            </label>
                                                            <input
                                                                readOnly
                                                                value={customer.fullName}
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                className=" form-control w-100"
                                                            ></input>
                                                        </div>
                                                    </div>

                                                    <div className=" mb-1 w-100">
                                                        <label htmlFor="phoneNumber">
                                                            Số điện thoại{" "}
                                                            <span className=" text-danger">*</span>
                                                        </label>
                                                        <input
                                                            readOnly
                                                            value={customer.phone}
                                                            type="text"
                                                            id="phoneNumber"
                                                            name="phoneNumber"
                                                            className=" form-control w-100"
                                                        ></input>
                                                    </div>
                                                    <div className=" mb-1 w-100">
                                                        <label htmlFor="email">
                                                            Email<span className=" text-danger">*</span>
                                                        </label>
                                                        <input
                                                            readOnly
                                                            value={customer.email}
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            className=" form-control w-100"
                                                        ></input>
                                                    </div>
                                                    <div className="  mb-1 w-100">
                                                        <label htmlFor="address">
                                                            Địa chỉ<span className=" text-danger">*</span>
                                                        </label>
                                                        <input
                                                            readOnly
                                                            value={customer.address}
                                                            type="text"
                                                            id="address"
                                                            name="address"
                                                            className=" form-control w-100"
                                                        ></input>
                                                    </div>
                                                </form>
                                            </div>
                                            <Link to="/home" className="btn btn-outline-primary mb-5">
                                                ← Tiếp tục xem sản phẩm
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default OrderDetail;