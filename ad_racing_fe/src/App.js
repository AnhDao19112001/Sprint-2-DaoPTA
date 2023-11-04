import './App.css';
import Login from "./component/Login";
import Cart from "./component/Cart";
import DetailProduct from "./component/DetailProduct";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Register from "./component/Register";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/cart`} element={<Cart />} />
      </Routes>

    //   <Register />
    //   <DetailProduct/>
    //   <Header />
    //   <Footer/>
    //   <Cart />
  );
}

export default App;
