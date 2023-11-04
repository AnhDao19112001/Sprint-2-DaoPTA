import "./LoginCSS.css"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react";
import * as userService from "../service/user/UserService"
import {Formik} from "formik";

function Login() {
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();

    const handleLogin = async () => {
        const data =
            {
                "userName": userName,
                "pass": pass,
            }
        try {
            const result = await userService.loginUser(data);
            console.log(result.data.jwtToken);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Formik initialValues={{
                userName: "",
                pass: ""
            }}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false);
                        let cloneValue ={
                            ...values,
                        }
                        handleLogin(cloneValue);
                    }}
            >
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div
                                    className="card bg-dark text-white"
                                    style={{borderRadius: "1rem"}}
                                >
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">Đăng nhập</h2>
                                            <p className="text-white-50 mb-5">
                                                Vui lòng nhập tên đăng nhập và mật khẩu!
                                            </p>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    onChange={(event) => {
                                                        setUserName(event.target.value)
                                                    }}
                                                />
                                                <label className="form-label" htmlFor="typeEmailX">
                                                    Tên đăng nhập
                                                </label>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                    onChange={(event) => {
                                                        setPass(event.target.value)
                                                    }}
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">
                                                    Mật khẩu
                                                </label>
                                            </div>
                                            <p className="small mb-5 pb-lg-2">
                                                <a className="text-white-50" href="#!">
                                                    Bạn quên mật khẩu?
                                                </a>
                                            </p>
                                            <button
                                                className="btn btn-outline-light btn-lg px-5"
                                                type="submit"
                                                onClick={() => handleLogin()}
                                            >
                                                Đăng nhập
                                            </button>
                                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                <a href="#" className="text-white">
                                                    <i className="fab fa-facebook-f fa-lg"/>
                                                </a>
                                                <a href="#" className="text-white">
                                                    <i className="fab fa-twitter fa-lg mx-4 px-2"/>
                                                </a>
                                                <a href="#" className="text-white">
                                                    <i className="fab fa-google fa-lg"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-0">
                                                Bạn chưa có tài khoảng?{" "}
                                                <a href="#" className="text-white-50 fw-bold">
                                                    Đăng ký
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Formik>
        </>
    )
}

export default Login;