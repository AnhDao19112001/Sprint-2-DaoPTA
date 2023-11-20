import "../../css/DetailProduct.css"
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {getIdProduct} from "../../service/product/ProductService";
import Swal from "sweetalert2";
import {getIdByUserName, infoAppUserByJwtToken} from "../../service/user/UserService";
import {checkQuantity, createCartDetail} from "../../service/cart/CartDetail";
import {useDispatch} from "react-redux";
import {getAllCarts} from "./reduce/cartAction";

function DetailProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [appUserId, setAppUserId] = useState(null);
    const {idProduct} = useParams();

    const getProductDetail = async () => {
        try {
            const result = await getIdProduct(idProduct);
            setProduct(result.data);
            const res = result.data.imagePath.split(",");
            setImages(res);
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 406) {
                Swal.fire("Không tìm thấy sản phẩm cần tìm!", "", "warning");
                navigate(`/home`);
            }
        }
    };

    const addToCarts = async (idProduct) => {
        const isLogged = infoAppUserByJwtToken();
        if (isLogged != null) {
            Swal.fire("Vui lòng đăng nhập!", "", "warning");
            localStorage.setItem("tempURL", window.location.pathname);
            navigate(`/login`);
        } else {
            const id = await getIdByUserName(isLogged.sub);
            setAppUserId(id.data);
            const quantity = document.getElementById("quantity-value").value;
            if (parseInt(quantity) <= 0) {
                Swal.fire("Vui lòng thêm ít nhất 1 sản phẩm!", "", "warning")
            } else {
                try {
                    const result = await checkQuantity(
                        idProduct,
                        parseInt(quantity));
                    console.log(result);
                    const res = await createCartDetail(quantity,id.data, idProduct);
                    console.log(res);
                    dispatch(getAllCarts(id.data));
                    Swal.fire("Thêm mới sản phẩm thành công!", "", "success");
                } catch {
                    Swal.fire("Sản phẩm vượt quá số lượng cho phép!", "", "warning");
                }
            }
        }
    }

    function handlePlus() {
        let quantityInput = document.getElementById("quantity-value");
        if (quantityInput.value < 99) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        } else {
            quantityInput.value = 99;
        }
    }

    function handleMinus() {
        let quantityInput = document.getElementById("quantity-value");
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
        if (quantityInput.value > 99) {
            quantityInput.value = 99;
        }
    }

    const currency = (money) => {
        return new Intl.NumberFormat("vi-VN").format(money);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <>
            <Header/>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    {product.id && (
                        <div className="col-md-10">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images p-3">
                                            <div className="text-center p-4">
                                                {images.length > 0 && images.map((el, index) => {
                                                    return (
                                                        <button type="button"
                                                                data-bs-target="#carouselExampleIndicators"
                                                                data-bs-slide-to={index}
                                                                className={index === activeIndex ? "active" : ""}
                                                                aria-current="true"
                                                                aria-label={`Slide ${index + 1}`}
                                                                style={{width: 70, height: 70}}>
                                                            <img src={el} alt=""
                                                                 id="main-image"
                                                                 width={250}/>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            <div className="carousel-inner">
                                                {images.length > 0 &&
                                                    images.map((el, index) => {
                                                        return (
                                                            <div
                                                                className={`carousel-item ${
                                                                    index === activeIndex ? "active" : ""
                                                                }`}
                                                            >
                                                                <img src={el} className="d-block w-100" alt="..."/>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="prev">
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"/>
                                                <span className="visually-hidden">Lùi</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="next">
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"/>
                                                <span className="visually-hidden">Tới</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    {" "}
                                                    <i className="fa fa-long-arrow-left"/>{" "}
                                                    <Link to={`/home`} className="ml-1">Quay về shop</Link>{" "}
                                                </div>
                                                {" "}
                                                <i className="fa fa-shopping-cart text-muted"/>
                                            </div>
                                            <div className="mt-4 mb-3">
                                                {" "}
                                                <span className="text-uppercase text-muted brand">
                                                AD RACING
                                            </span>
                                                <h5 className="text-uppercase">{product.nameProduct}</h5>
                                                <div className="price d-flex flex-row align-items-center">
                                                    {" "}
                                                    <span className="act-price">{currency(product.price)} VNĐ</span>
                                                </div>
                                            </div>
                                            <p className="about">
                                                {product.description}
                                            </p>

                                            <div className="cart mt-4 align-items-center">
                                                {" "}
                                                <button
                                                    onClick={() => handleMinus()}
                                                    className="minus"
                                                />
                                                <button className="btn btn-danger text-uppercase mr-2 px-4"
                                                        onClick={() => addToCarts(product.id)}>
                                                    Thêm vào giỏ hàng.
                                                </button>
                                                <button
                                                    onClick={() => handlePlus()}
                                                    className="minus"
                                                />
                                                {" "}
                                                <i className="fa fa-heart text-muted"/>{" "}
                                                <i className="fa fa-share-alt text-muted"/>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DetailProduct;