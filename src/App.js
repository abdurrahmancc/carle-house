import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Blog/Blog";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Registration/Registration";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Register2 from "./Components/Pages/Registration/Register2";
import RequireAuth from "./Components/Shared/RequireAuth/RequireAuth";
import Products from "./Components/Pages/Producsts/Products";
import AllProducts from "./Components/Pages/AllProducts/AllProducts";
import AddProducts from "./Components/Pages/AddProducts/AddProducts";
import Inventory from "./Components/Pages/Inventory/Inventory";
import Blog from "./Components/Pages/Blog/Blog";
import MyItem from "./Components/Pages/MyItem/MyItem";
import About from "./Components/Pages/About/About";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="rootPage">
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addproducts"
          element={
            <RequireAuth>
              <AddProducts></AddProducts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
        {/* <Route path="/" element={}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
