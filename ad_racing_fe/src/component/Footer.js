import "../css/assets/css/bootstrap.min.css";
import "../css/assets/css/templatemo.css";
import "../css/assets/css/custom.css";
import "../css/assets/css/fontawesome.min.css";

function Footer(){
    return(
        <>
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">AD RACING</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    Đại Lộc, Quảng Nam, Việt Nam.
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <a className="text-decoration-none" href="tel:010-020-0340">0931997293</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none"
                                       href="mailto:info@company.com">phantaanhdao@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Sản phẩm</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Pô</a></li>
                                <li><a className="text-decoration-none" href="#">Dàn áo</a></li>
                                <li><a className="text-decoration-none" href="#">Gương kiểng</a></li>
                                <li><a className="text-decoration-none" href="#">Bao tay + gù</a></li>
                                <li><a className="text-decoration-none" href="#">Mâm xe + Lốp</a></li>
                                <li><a className="text-decoration-none" href="#">Phụ tùng thay thế</a></li>
                                <li><a className="text-decoration-none" href="#">Đồ dùng cho Biker</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Thông tin thêm</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Trang chủ</a></li>
                                <li><a className="text-decoration-none" href="#">Thông tin về chúng tôi</a></li>
                                <li><a className="text-decoration-none" href="#">Shop</a></li>
                                <li><a className="text-decoration-none" href="#">Câu hỏi</a></li>
                                <li><a className="text-decoration-none" href="#">Liên hệ</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank"
                                       href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank"
                                       href="https://www.instagram.com/"><i
                                        className="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank"
                                       href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank"
                                       href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="subscribeEmail">Địa chỉ email</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail"
                                       placeholder="địa chỉ email" />
                                    <div className="input-group-text btn-success text-light">Đăng ký</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright &copy; 2021 Company Name
                                    | Designed by <a rel="sponsored" href="https://templatemo.com"
                                                     target="_blank">TemplateMo</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;