import "../css/Cart.css"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {infoAppUserByJwtToken} from "../service/user/UserService";
import * as cartService from "../service/cart/CartDetail";
import {Paypal} from "./Paypal";
import Swal from "sweetalert2";

function Cart() {
    const [checkout, setCheckout] = useState(false);
    const [cartDetail, setCartDetail] = useState([]);
    const getCartDetail = async () => {
        const result = infoAppUserByJwtToken();
        if (result != null) {
            const response = await cartService.getListCartDetail(result.sub);
            setCartDetail(response.data);
        }
    }

    const deleteCart = async (c) => {
        try {
            Swal.fire({
                title: "Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?",
                text: c.name,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Huỷ",
            })
                .then(async (confirm) => {
                    if (confirm.isConfirmed) {
                        const res = infoAppUserByJwtToken();
                        await deleteCart(res.sub, c.id)
                        Swal.fire("Xóa sản phẩm thành công!", "", "success");
                        getCartDetail();
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCartDetail();
    }, []);

    return (<>
        <Header/>
        <section className="h-custom" style={{backgroundColor: "#eee", paddingBottom: "70%"}}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card shopping-cart" style={{borderRadius: 15}}>
                            <div className="card-body text-black">
                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                            Giỏ hàng của bạn
                                        </h3>
                                        {cartDetail.map((c) => (
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={c.imagePath}
                                                        className="img-fluid"
                                                        style={{width: 150}}
                                                        alt="Generic placeholder image"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <a href="#!" className="float-end text-black">
                                                        <i className="fas fa-times"/>
                                                    </a>
                                                    <h5 className="text-primary">{c.nameProduct}</h5>
                                                    <div className="d-flex align-items-center">
                                                        <p className="fw-bold mb-0 me-5 pe-3">{c.price}</p>
                                                        <div className="def-number-input number-input safari_only">
                                                            <button
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                className="minus"
                                                            />
                                                            <input
                                                                className="quantity fw-bold text-black"
                                                                min={0}
                                                                name="quantity"
                                                                defaultValue={1}
                                                                type="number"
                                                            />
                                                            <button
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                className="plus"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <hr
                                            className="mb-4"
                                            style={{
                                                height: 2, backgroundColor: "#1266f1", opacity: 1
                                            }}
                                        />
                                        <div className="d-flex justify-content-between px-x">
                                            <p className="fw-bold">Chiết khấu:</p>
                                            <p className="fw-bold">50.000vnđ</p>
                                        </div>
                                        <div
                                            className="d-flex justify-content-between p-2 mb-2"
                                            style={{backgroundColor: "#e1f5fe"}}
                                        >
                                            <h5 className="fw-bold mb-0">Tổng tiền:</h5>
                                            <h5 className="fw-bold mb-0">5.400.000vnđ</h5>
                                        </div>
                                    </div>
                                    <div>
                                        {checkout ? (<Paypal/>) : (
                                            <button onClick={() => setCheckout(true)} type="button"
                                                    className={"btn btn-outline-primary"}>Thanh toán</button>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>)
}

export default Cart;