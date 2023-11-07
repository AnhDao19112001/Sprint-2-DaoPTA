import "bootstrap/dist/css/bootstrap.css"
function Footer(){
    return(
        <>
            {/* Footer */}
            <footer className="text-center text-lg-start bg-light text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Hãy kết nối với chúng tôi</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />
                                    AD RACING
                                </h6>
                                <p>
                                    Ở đây chúng tôi bán những sản phẩm chất lượng
                                    Bán cả uy tín lẫn sản phẩm!
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Đồ bảo hộ cho Biker
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Phụ kiện cho xe
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Phụ tùng thay thế
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Dàn áo
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Liên kết hữu ích</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Giá cả
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Cài đặt
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Đơn đặt hàng
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Giúp đỡ
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                                <p>
                                    <i className="fas fa-home me-3" /> Đại Lộc, Quảng Nam
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    phantaanhdao@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" /> +84 931997293
                                </p>
                                <p>
                                    <i className="fas fa-print me-3" /> +84 935020313
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                        phantaanhdao@gmail.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>
    )
}
export default Footer;