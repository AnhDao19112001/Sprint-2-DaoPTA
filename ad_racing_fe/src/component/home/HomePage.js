import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules";
import "./Home.css";
function HomePage() {
    return(
        <>
            {/*<section className="book-table bg-light pt-2 pb-2">*/}
            {/*    <div className="sec-wp">*/}
            {/*        <div className="container">*/}
            {/*            <div className="row">*/}
            {/*                <div className="col-lg-12">*/}
            {/*                    <div className="sec-title text-center mb-5">*/}
            {/*                        <p className="sec-sub-title mb-5 w-50">*/}
            {/*                            Chương trình khuyến mãi*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <Swiper*/}
            {/*                effect={"coverflow"}*/}
            {/*                grabCursor={true}*/}
            {/*                centeredSlides={true}*/}
            {/*                slidesPerView={"auto"}*/}
            {/*                autoplay={{*/}
            {/*                    delay: 2500,*/}
            {/*                    disableOnInteraction: false,*/}
            {/*                }}*/}
            {/*                loop={true}*/}
            {/*                speed={6000}*/}
            {/*                coverflowEffect={{*/}
            {/*                    rotate: 50,*/}
            {/*                    stretch: 0,*/}
            {/*                    depth: 100,*/}
            {/*                    modifier: 1,*/}
            {/*                    slideShadows: true,*/}
            {/*                }}*/}
            {/*                modules={[EffectCoverflow, Autoplay, Navigation]}*/}
            {/*                className="mySwiper-bottom"*/}
            {/*            >*/}
            {/*                <SwiperSlide>*/}
            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="book-table-img back-img swiper-slide"*/}
            {/*                        style={{*/}
            {/*                            backgroundImage:*/}
            {/*                                "url(https://shop2banh.vn/images/thumbs/tags/phuoc-ohlins-490.jpg)",*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                </SwiperSlide>*/}
            {/*                <SwiperSlide>*/}
            {/*                    <a*/}
            {/*                        href="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/913-1694600382533.png"*/}
            {/*                        className="book-table-img back-img swiper-slide"*/}
            {/*                        style={{*/}
            {/*                            backgroundImage:*/}
            {/*                                "url(https://d2x.vn/wp-content/uploads/2021/07/c5be4478-c02e-4a2e-837d-57acd43b5a67-scaled.jpeg)",*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                </SwiperSlide>*/}
            {/*                <SwiperSlide>*/}
            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="book-table-img back-img swiper-slide"*/}
            {/*                        style={{*/}
            {/*                            backgroundImage: "url(https://i.ytimg.com/vi/wM8EH0Ovpjc/maxresdefault.jpg)",*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                </SwiperSlide>*/}
            {/*            </Swiper>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid"
                                         src="https://shop2banh.vn/images/thumbs/tags/phuoc-ohlins-490.jpg" alt=""/>
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>AD</b> RAYCING</h1>
                                        <h3 className="h2">Hàng mới phù hợp với nhiều loại xe</h3>
                                        <p>
                                            AD RACING
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid"
                                         src="https://d2x.vn/wp-content/uploads/2021/07/c5be4478-c02e-4a2e-837d-57acd43b5a67-scaled.jpeg"
                                         alt=""/>
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Nhiều hàng mới</h1>
                                        <h3 className="h2">Mẫu mã hàng hóa mới nhập uy tín</h3>
                                        <p>
                                            Chúng tôi luôn cập nhật hàng hóa mới nhất và chất lượng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid"
                                         src="https://i.ytimg.com/vi/wM8EH0Ovpjc/maxresdefault.jpg" alt=""/>
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Uy tín</h1>
                                        <h3 className="h2">Uy tín chất lượng</h3>
                                        <p>
                                            Chúng tôi luôn luôn đảm bảo chất lượng sản phẩm, bảo hành nếu sản phẩm lỗi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3"
                   href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3"
                   href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>

            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Danh mục của tháng này</h1>
                        <p>
                            Danh mục tháng này bao gồm những sản phẩm mới và được ưa chuộng.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img
                            src="https://pro-biker.vn/image/catalog/non-bao-hiem/kyt/tt-course/mu-kyt-tt-course-jaume-masia-rep-6.jpg"
                            className="rounded-circle img-fluid border"/></a>
                        <h5 className="text-center mt-3 mb-3">Ốc Titan xanh</h5>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img
                            src="https://pro-biker.vn/image/catalog/non-bao-hiem/kyt/tt-course/mu-kyt-tt-course-jaume-masia-rep-6.jpg"
                            className="rounded-circle img-fluid border"/></a>
                        <h2 className="h5 text-center mt-3 mb-3">Tay thắng dầu Brembo</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img
                            src="https://pro-biker.vn/image/catalog/non-bao-hiem/kyt/tt-course/mu-kyt-tt-course-jaume-masia-rep-6.jpg"
                            className="rounded-circle img-fluid border"/></a>
                        <h2 className="h5 text-center mt-3 mb-3">Mủ giáp Biker</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Sản phẩm được yêu thích</h1>
                            <p>
                                Đây là những sản phẩm được yêu thích và được mua nhiều
                                nhất shop!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="shop-single.html">
                                    <img
                                        src="http://cdn-img-v2.webbnc.net/uploadv2/web/97/9724/product/2018/05/25/10/37/1527243956_33489068_1870101513011016_8050804080525705216_n.jp.jpg"
                                        className="card-img-top" alt="..."/>
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">$240.00</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Pô
                                        LeoVince</a>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui
                                        officia deserunt.
                                    </p>
                                    <p className="text-muted">Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="shop-single.html">
                                    <img
                                        src="https://atvietnam.vn/upload/images/z2621894743054_be9d336aa291827aceb87e44bfe422f4.jpg"
                                        className="card-img-top" alt="..."/>
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">$480.00</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Cầu Bi LED
                                        HD08</a>
                                    <p className="card-text">
                                        Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed,
                                        commodo ullamcorper.
                                    </p>
                                    <p className="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="shop-single.html">
                                    <img src="https://i.ytimg.com/vi/RR-MmngfbFA/maxresdefault.jpg"
                                         className="card-img-top" alt="..."/>
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">$360.00</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Giàn áo
                                        sirus xi măng và đèn chóa 2 tầng</a>
                                    <p className="card-text">
                                        Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et
                                        scelerisque ipsum lobortis nec.
                                    </p>
                                    <p className="text-muted">Reviews (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomePage;