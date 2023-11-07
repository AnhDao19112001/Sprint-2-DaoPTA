import "bootstrap/dist/css/bootstrap.css"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as userService from "../../service/user/UserService"
import Swal from "sweetalert2";
import {BiCog, BiLogOutCircle, BiUserCircle} from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUserName] = useState("");
    const [keyWord, setKeyWord] = useState("");
    const [userId, setUserId] = useState("");
    const [types, setTypes] = useState([]);

    const roleAdmin = userService.checkRollAppUser("ROLE_ADMIN");
    const roleCustomer = userService.checkRollAppUser("ROLE_CUSTOMER");

    const getUserName = async () => {
        const result = await userService.infoAppUserByJwtToken();
        setUserName(result);
    }
    const getAppUserId = async () => {
        const isLoggedIn = userService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await userService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);
        }
    }

    useEffect(() => {
        getUserName();
    }, []);

    useEffect(() => {
        getAppUserId();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUserName(undefined);
        navigate("/cart");
        Swal.fire({
            title: "Đăng xuất thành công!",
            icon: "success",
        });
        navigate("/cart");
        window.location.reload();
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
                        <a className="navbar-brand mt-2 mt-lg-0" href="src/component#">
                            <img
                                src="AD_RACING_logo.png"
                                height={70}
                                width={100}
                                alt="AD RACING"
                                loading="lazy"
                            />
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="src/component#">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="src/component#">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="src/component#">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <i className="fas fa-shopping-cart"/>
                    <img src="https://kawasakivietnam.vn/data/product/800/kawasaki-ninja-400-2021-1612063576.jpg"
                         style={{width:50, height: 50}}
                         alt=""/>
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
                                        <Dropdown.Item as={Link} to={"/dashboard/retail"}>Chức năng</Dropdown.Item>
                                    )}
                                    <Dropdown.Item onClick={() => {
                                        handleLogout();
                                    }}>Đăng xuất</Dropdown.Item>
                                </>
                            ) : null}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </>
    )
}

export default Header;