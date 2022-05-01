import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Services/Services";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Registration/Registration";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Register2 from "./Components/Pages/Registration/Register2";
import Loading from "./Components/Pages/Loading/Loading";
import RequireAuth from "./Components/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="rootPage">
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/services" element={<Services></Services>}></Route> */}
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
        {/* <Route path="/loading" element={<Loading></Loading>}></Route> */}
        {/* <Route path="/" element={}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
