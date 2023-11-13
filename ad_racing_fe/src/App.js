import './App.css';
import Login from "./component/user/Login";
import Cart from "./component/Cart";
import Register from "./component/user/Register";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./component/DetailProduct";
import Authentication from "./component/user/Authentication";
import {EnumAppUserRole} from "./component/user/EnumAppUserRoles";
import AuthorOfCustomer from "./component/user/AuthorOfCustomer";
import Error from "./component/user/Error";
import HomePage from "./component/home/HomePage";
import "bootstrap/dist/css/bootstrap.css"
import HavingNoResult from "./component/search/HavingNoResult";
import ProductWithKind from "./component/layout/ProductWithKind";
function App() {
    return (
        <Routes>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/register`} element={<Register/>}/>
            <Route path={`/cart`} element={<Cart/>}/>
            <Route path={`/detail`} element={<DetailProduct/>}/>
            <Route path={`/403`} element={<Error />}/>
            <Route path={`/home`} element={<HomePage />}/>
            <Route path={`/404`} element={<HavingNoResult />}/>
            <Route path={`/home/list-product/:type`} element={<ProductWithKind />}/>
            <Route element={
                <Authentication
                    allowedRoles={[
                        EnumAppUserRole.ROLE_ADMIN,
                        EnumAppUserRole.ROLE_CUSTOMER,
                    ]}
                />
            }>
                <Route element={<AuthorOfCustomer />}>
                    <Route path={`/detail`} element={<DetailProduct />} />
                </Route>
            </Route>
        </Routes>

    );
}

export default App;
