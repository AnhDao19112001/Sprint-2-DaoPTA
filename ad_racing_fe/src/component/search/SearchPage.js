import React, {useEffect, useState} from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {useParams, Link, useNavigate} from "react-router-dom";
import * as homeService from "../../service/home/HomeService";
import HavingNoResults from "./HavingNoResult";
import {ToastContainer} from "react-toastify";
import * as utils from "../../service/utils/Utils";

export const SearchPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [nameProduct, setNameProduct] = useState(params.nameProduct);
    const [nameType, setNameType] = useState("");
    const [sortBy, setSortBy] = useState("price");
    const [sort, setSort] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [totalElements, setTotalElements] = useState(0);
    const [displayKeyword, setDisplayKeyword] = useState(params.nameProduct);
    const [isNoContent, setIsNoContent] = useState(false);
    const [appUserId, setAppUserId] = useState(null);

    useEffect(() => {
        console.log(params.nameProduct);
        setCurrentPage(1);
        getProductList();
    }, [params.nameProduct]);

    useEffect(() => {
        getProductList();
    }, [currentPage, sortBy, sort]);

    const getProductList = async () => {
        setIsNoContent(false);
        let trimKeyword = " ";
        if (nameProduct !== undefined) {
            trimKeyword = nameProduct.trim();
        } else {
            trimKeyword = "";
        }
        const response = await homeService.searchProduct(
            currentPage - 1,
            pageSize,
            trimKeyword,
            nameType,
            sort,
            sortBy
        );
        if (response.status === 204) {
            setIsNoContent(true);
            setNameProduct("");
        } else {
            setProductList(response.data.content);
            setTotalElements(response.data.totalElements);
            setDisplayKeyword(nameProduct);
        }
    };


    const handleInputChange = async (event) => {
        event.preventDefault();
        setNameProduct(event.target.value);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSortDirectionChange = (event) => {
        setSort(event.target.value);
    };

    const totalPages = Math.ceil(totalElements / pageSize);

    return (
        <>
            <Header inputSearch={nameProduct} onInputChange={handleInputChange}/>
            <section
                className="our-menu bg-light repeat-img pb-5"
                style={{padding: "7rem 0 0"}}
            >
                {isNoContent ? (
                    <HavingNoResults/>
                ) : (
                    <>
                        <div className="container min-vh-100">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="sec-title text-center mt-4">
                                        <p className="sec-sub-title">Kết quả tìm kiếm</p>
                                    </div>
                                    <div className="border border-warning rounded-2 py-2 mb-4">
                                        <div
                                            className="ms-5 fs-6 mb-1"
                                            style={{color: "rgb(27, 65, 168)"}}
                                        >
                                            Tìm thấy {totalElements} kết quả với từ khoá "
                                            {displayKeyword}"
                                        </div>
                                        <div className="d-flex ms-5 gap-3 fs-6 align-items-center">
                                            <span>Sắp xếp theo: </span>
                                            <select value={sortBy} onChange={handleSortByChange}>
                                                <option value="price">Giá</option>
                                                <option value="nameProduct">Tên sản phẩm</option>
                                            </select>

                                            <span>Cách sắp xếp: </span>
                                            <select
                                                value={sort}
                                                onChange={handleSortDirectionChange}
                                            >
                                                <option value="asc">Tăng dần</option>
                                                <option value="desc">Giảm dần</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {productList?.map((el, index) => {
                                    const discountPercentage = utils.getDiscount(
                                        el.price
                                    );
                                    const actualPrice =
                                        Math.ceil(
                                            el.price /
                                            ((100 - discountPercentage) / 100) /
                                            1000
                                        ) * 1000;
                                    return (
                                        <div
                                            className="col-lg-3 d-flex justify-content-center mb-3"
                                            key={index}
                                        >
                                            <div className="product-card">
                                                <div className="product-image">
                          <span className="discount-tag">
                            {`${discountPercentage}% off`}
                          </span>
                                                    <Link to={`/details/${el.idProduct}`}>
                                                        <img
                                                            src={el.imageProduct}
                                                            className="product-thumb"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <button
                                                        className="card-btn"
                                                    >
                                                        Mua
                                                    </button>
                                                </div>
                                                <div className="product-info">
                                                    <p className="product-short-description">
                                                        {el.nameProduct}
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                            <span className="price">
                              {parseFloat(el.price).toLocaleString(
                                  "en-US",
                                  {
                                      minimumFractionDigits: 0,
                                      maximumFractionDigits: 0,
                                  }
                              )}{" "}
                                VNĐ
                            </span>
                                                    </div>
                                                    <div>
                            <span className="actual-price">
                              {actualPrice.toLocaleString("en-US", {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                              })}
                                VNĐ
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="row justify-content-center mt-5">
                                <nav aria-label="Pagination" style={{width: "100%"}}>
                                    <ul className="pagination d-flex justify-content-center">
                                        <li
                                            className={`page-item ${currentPage === 1 && "disabled"}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                style={{color: "rgb(27, 65, 168)"}}
                                            >
                                                &laquo;
                                            </button>
                                        </li>
                                        {[...Array(totalPages).keys()].map((page) => (
                                            <li
                                                key={page}
                                                className={`page-item ${
                                                    currentPage === page + 1 && "active"
                                                }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    style={{color: "rgb(27, 65, 168)"}}
                                                    onClick={() => handlePageChange(page + 1)}
                                                >
                                                    {page + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li
                                            className={`page-item ${
                                                currentPage === totalPages && "disabled"
                                            }`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                style={{color: "rgb(27, 65, 168)"}}
                                            >
                                                &raquo;
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <Footer/>
            <ToastContainer autoClose={2000} className="toast-position"/>
        </>
    );
};
export default SearchPage;
