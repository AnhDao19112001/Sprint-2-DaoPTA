import "bootstrap/dist/css/bootstrap.css"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as userService from "../../service/user/UserService"
import Swal from "sweetalert2";
import {BiCog, BiLogOutCircle, BiUserCircle} from "react-icons/bi";

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
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
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
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-2 mt-lg-0" href="src/component#">
                            <img
                                src="AD_RACING_logo.png"
                                height={70}
                                width={100}
                                alt="AD RACING"
                                loading="lazy"
                            />
                        </a>
                        {/* Left links */}
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
                    <a className="text-reset me-3" href="src/component#">
                        <i className="fas fa-shopping-cart"/>

                        {!userName ? (
                            <Link to="/login">
                                <span className="user-info">Đăng nhập</span>
                            </Link>
                        ) : (
                            <span className="user-info" style={{overflow: "hidden"}}>
                                {userName.sub}
                            </span>
                        )}
                        <div className="user-dropdown-list">
                            {JwtToken ? (
                                <>
                                    <Link
                                        className=" user-dropdown-item d-flex align-items-center hidden-arrow"
                                        to={`/user-info/${userId}`}
                                        id="navbarDropdownMenuAvatar"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false">
                                        <BiUserCircle className="me-3 ms-0" size={25}/>
                                        <div className="dropdown-text">Thông tin</div>
                                    </Link>
                                    {(roleAdmin || roleCustomer) && (
                                        <Link
                                            to={"/dashboard/retail"}
                                            className="user-dropdown-item"
                                        >
                                            <BiCog className="me-3 ms-0" size={25}/>
                                            <div className="dropdown-text">Chức năng</div>
                                        </Link>
                                    )}
                                    <Link className="user-dropdown-item">
                                        <BiLogOutCircle className="me-3 ms-0" size={25}/>
                                        <div
                                            className="dropdown-text"
                                            onClick={() => {
                                                handleLogout();
                                            }}
                                        >
                                            Đăng xuất
                                        </div>
                                    </Link>
                                </>
                            ) : null}
                        </div>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header;