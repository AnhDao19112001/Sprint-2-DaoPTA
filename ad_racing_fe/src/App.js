import './App.css';
import Login from "./component/user/Login";
import Cart from "./component/Cart";
import Register from "./component/user/Register";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./component/DetailProduct";

function App() {
  return (
      <Routes>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/cart`} element={<Cart />} />
        <Route path={`/detail`} element={<DetailProduct />} />
      </Routes>
  );
}

export default App;
