import './App.css';
import Login from "./component/user/Login";
import Cart from "./component/order/Cart";
import Register from "./component/user/Register";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./component/order/DetailProduct";
import Authentication from "./component/user/Authentication";
import {EnumAppUserRole} from "./component/user/EnumAppUserRoles";
import AuthorOfCustomer from "./component/user/AuthorOfCustomer";
import Error from "./component/user/Error";
import HomePage from "./component/home/HomePage";
import "bootstrap/dist/css/bootstrap.css"
import HavingNoResult from "./component/search/HavingNoResult";
import ProductWithKind from "./component/layout/ProductWithKind";
import SearchPage from "./component/search/SearchPage";
import ListOrder from "./component/order/ListOrder";
import Info from "./component/user/Info";
function App() {
    return (
        <Routes>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/register`} element={<Register/>}/>
            <Route path={`/cart`} element={<Cart/>}/>
            <Route path={`/details/:idProduct`} element={<DetailProduct/>}/>
            <Route path={`/403`} element={<Error />}/>
            <Route path={`/home`} element={<HomePage />}/>
            <Route path={`/404`} element={<HavingNoResult />}/>
            <Route path={`/home/search/:nameProduct`} element={<SearchPage />} />
            <Route path={"/home/search/"} element={<SearchPage />} />
            <Route path={`/home/list-product/:nameType`} element={<ProductWithKind />} />

            <Route element={
                <Authentication
                    allowedRoles={[
                        EnumAppUserRole.ROLE_ADMIN,
                        EnumAppUserRole.ROLE_CUSTOMER,
                    ]}
                />
            }>
                <Route path={`/home/list-order`} element={<ListOrder />} />
                <Route path={`/user-info/:userId`} element={<Info />} />
                <Route element={<AuthorOfCustomer />}>
                    <Route path={`/user-info/:userId`} element={<Info />} />
                </Route>
            </Route>
        </Routes>

    );
}

export default App;
