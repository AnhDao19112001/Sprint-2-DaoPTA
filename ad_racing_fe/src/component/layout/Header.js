// import "../home/Home.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as userService from "../../service/user/UserService"
import Swal from "sweetalert2";
import Dropdown from 'react-bootstrap/Dropdown';
import {AiOutlineShoppingCart} from "react-icons/ai";
import * as typeProduct from "../../service/type/TypeProduct";
import {CiSearch} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {getAllCarts} from "../order/reduce/cartAction";

const Header = ({ inputSearch, onInputChange }) => {
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUserName] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [userId, setUserId] = useState("");
    const [nameType, setNameType] = useState([]);
    const carts = useSelector((state) => state.cartReducer);
    const roleAdmin = userService.checkRollAppUser("ROLE_ADMIN");
    const roleCustomer = userService.checkRollAppUser("ROLE_CUSTOMER");
    const dispatch = useDispatch();

    const getUserName = async () => {
        const result = await userService.infoAppUserByJwtToken();
        setUserName(result);
    }
    const getAppUserId = async () => {
        const isLoggedIn = userService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await userService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);
            dispatch(getAllCarts(isLoggedIn.sub));

        }
    }
    const getTypeProduct = async () => {
        const result = await typeProduct.getAllType();
        setNameType(result);
    }

    useEffect(() => {
        getUserName();
    }, []);

    useEffect(() => {
        getAppUserId();
        getTypeProduct();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUserName(undefined);
        navigate("/home");
        Swal.fire({
            title: "Đăng xuất thành công!",
            icon: "success",
        });
        navigate("/home");
        window.location.reload();
    }

    const handleInputChange = (event) => {
        setNameProduct(event.target.value);
    }
    const handleProduct = (nameProduct) => {
        navigate(`/home/search/${nameProduct}`);
    }
    const handleSearch = (event) => {
        event.preventDefault();
        handleProduct(nameProduct);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink className="navbar-brand mt-2 mt-lg-0" to={`/home`}>
                            <img
                                src="AD_RACING_logo.png"
                                height={70}
                                width={100}
                                alt="AD RACING"
                                loading="lazy"
                            />
                        </NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/home"}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="src/component#">
                                    Về chúng tôi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="category">
                                    <div
                                        className="category-info mt-2 "
                                        style={{overflow: "hidden"}}
                                    >
                                        Danh mục
                                    </div>
                                    <div className="category-dropdown-list ">
                                        {nameType?.map((type, index) => (
                                            <Link
                                                key={index}
                                                to={`/home/list-product/${type.nameType}`}
                                                className="category-dropdown-item"
                                            >
                                                <div className="dropdown-text">{type.nameType}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right col-lg-6 d-flex align-items-center justify-content-end">
                        <form className="header-search-form for-des" style={{paddingRight: "5px"}}>
                            <input
                                type="search"
                                id="form-input-home"
                                className="form-input m-0"
                                placeholder="Tìm kiếm..."
                                value={inputSearch}
                                onChange={(event) => {
                                    handleInputChange(event);
                                    onInputChange(event);
                                }}
                            />
                            <button type="submit" onClick={(e) => handleSearch(e)}>
                                <CiSearch/>
                            </button>
                        </form>

                        {userName && (
                                <Link to={`/cart`} href="" className="header-btn header-cart" style={{marginRight:20}}>
                                        <AiOutlineShoppingCart size="2em"/><span className="cart-number">{carts.length}</span>
                                </Link>
                            )}

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {!userName ? (
                                    <Link to="/login">
                                        <span className="user-info" style={{color: "black"}}>Đăng nhập</span>
                                    </Link>
                                ) : (
                                    <span className="user-info" style={{overflow: "hidden"}}>
                                {userName.sub}
                            </span>
                                )}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {JwtToken ? (
                                    <>
                                        <Dropdown.Item as={Link} to={`/user-info/${userId}`}>Thông tin</Dropdown.Item>
                                        {(roleAdmin || roleCustomer) && (
                                            <Dropdown.Item as={Link} to={"/home"}>Chức năng</Dropdown.Item>
                                        )}
                                        <Dropdown.Item onClick={() => {
                                            handleLogout();
                                        }}>Đăng xuất</Dropdown.Item>
                                    </>
                                ) : null}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;