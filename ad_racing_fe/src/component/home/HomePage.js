import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules";
import "./Home.css";
function HomePage() {
    return(
        <>
            <section className="book-table bg-light pt-2 pb-2">
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-title text-center mb-5">
                                    <p className="sec-sub-title mb-5 w-50">
                                        Chương trình khuyến mãi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={6000}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Autoplay, Navigation]}
                            className="mySwiper-bottom"
                        >
                            <SwiperSlide>
                                <a
                                    href="#"
                                    className="book-table-img back-img swiper-slide"
                                    style={{
                                        backgroundImage:
                                            "url(https://shop2banh.vn/images/thumbs/tags/phuoc-ohlins-490.jpg)",
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/913-1694600382533.png"
                                    className="book-table-img back-img swiper-slide"
                                    style={{
                                        backgroundImage:
                                            "url(https://d2x.vn/wp-content/uploads/2021/07/c5be4478-c02e-4a2e-837d-57acd43b5a67-scaled.jpeg)",
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="#"
                                    className="book-table-img back-img swiper-slide"
                                    style={{
                                        backgroundImage: "url(https://i.ytimg.com/vi/wM8EH0Ovpjc/maxresdefault.jpg)",
                                    }}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomePage;