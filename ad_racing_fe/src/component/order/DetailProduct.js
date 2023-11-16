import "../../css/DetailProduct.css"
import Header from "../layout/Header";
import Footer from "../layout/Footer";
function DetailProduct() {
    return (
        <>
            <Header/>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            {" "}
                                            <img
                                                id="main-image"
                                                src="https://bizweb.dktcdn.net/100/152/658/products/osram-cbi-2.jpg?v=1595840001763"
                                                width={250}
                                            />{" "}
                                        </div>
                                        <div className="thumbnail text-center">
                                            {" "}
                                            <img
                                                onClick="change_image(this)"
                                                src="https://bizweb.dktcdn.net/100/152/658/products/osram-cbi-2.jpg?v=1595840001763"
                                                width={70}
                                            />{" "}
                                            <img
                                                onClick="change_image(this)"
                                                src="https://bizweb.dktcdn.net/100/152/658/products/osram-cbi-3.jpg?v=1595839993347"
                                                width={70}
                                            />{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                {" "}
                                                <i className="fa fa-long-arrow-left"/>{" "}
                                                <a className="ml-1">Quay về shop</a>{" "}
                                            </div>
                                            {" "}
                                            <i className="fa fa-shopping-cart text-muted"/>
                                        </div>
                                        <div className="mt-4 mb-3">
                                            {" "}
                                            <span className="text-uppercase text-muted brand">
                                                AD RACING
                                            </span>
                                            <h5 className="text-uppercase">Bi cầu - LED Osram CBI</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                {" "}
                                                <span className="act-price">Giá: 6.500.000vnđ</span>
                                            </div>
                                        </div>
                                        <p className="about">
                                            Bi cầu - LED Osram CBI là một mẫu gương cầu LED chính hãng đến từ thương hiệu Osram của Đức.

                                            Lắp đặt sử dụng máy hấp chuyên dụng, pat, không cắt đấu nối dây. Công lắp đặt phụ thuộc vào mức độ phức tạp từng dòng xe.
                                        </p>

                                        <div className="cart mt-4 align-items-center">
                                            {" "}
                                            <button className="btn btn-danger text-uppercase mr-2 px-4">
                                                Add to cart
                                            </button>
                                            {" "}
                                            <i className="fa fa-heart text-muted"/>{" "}
                                            <i className="fa fa-share-alt text-muted"/>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div style={{fontFamily:"RB",fontSize: "30px", marginBottom:"10px", textAlign: "center"}}>
                                Sản phẩm cùng loại</div>
                            <div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                            style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                    color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-support" style={{fontSize:"100%", verticalAlign:"baseline", background: "transparent"}}>
                                <div style={{width:"250px", float:"left", margin:"0 10px 20px 0", fontFamily:"RR", color:"#1e1e1e", textAlign: "justify"}}>
                                    <div style={{overflow:"hidden", marginLeft:"5px" ,padding:"4px",border:"1px solid #ebebeb"}}>
                                        <a href="src/component#">
                                            <img src="https://khoadenxe.com/upload/filemanager/bi%20b11%202200k%2022.jpg"
                                                 style={{width:202,height:205, marginLeft:"3px"}}/>
                                        </a>
                                    </div>
                                    <h3 style={{fontSize:"15px", lineHeight:"25px", fontWeight: "normal",padding:"5px 0px",
                                        color:"#484848",fontFamily:"RB", textAlign: "center"}}>
                                        Bi cầu led đời mới
                                    </h3>
                                    <div style={{fontSize:"14px",display:"flex", justifyContent:"space-between", alignItems:"center",color:"red",marginLeft:"33%"}}>
                                        <span>7.200.000vnđ</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DetailProduct;