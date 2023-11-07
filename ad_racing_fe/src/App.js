import './App.css';
import Login from "./component/user/Login";
import Cart from "./component/Cart";
import Register from "./component/user/Register";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./component/DetailProduct";
import Authentication from "./component/user/Authentication";
import {EnumAppUserRole} from "./component/user/EnumAppUserRoles";
import AuthorOfCustomer from "./component/user/AuthorOfCustomer";

function App() {
    return (
        <Routes>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/register`} element={<Register/>}/>
            <Route path={`/cart`} element={<Cart/>}/>
            <Route path={`/detail`} element={<DetailProduct/>}/>

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
