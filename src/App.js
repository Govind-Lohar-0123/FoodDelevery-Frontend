import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDash from "./components/pages/Admin/AdminDash";
import ProfileLayout from "./components/pages/UserProfile/ProfileLayout.jsx";
import MyProfile from "./components/pages/UserProfile/MyProfile.jsx";


import { Provider } from "react-redux";

import store from "./components/app/store.js";
import MyCard from "./components/pages/UserProfile/MyCard.jsx";
import MyOrder from "./components/pages/UserProfile/MyOrder.jsx";
import Login from "./components/pages/auth/Login.jsx";
import Register from "./components/pages/auth/Register.jsx";
import ResetPassword from "./components/pages/auth/ResetPassword.jsx";
import ForgetPassword from "./components/pages/auth/ForgetPassword.jsx";
import ChangePassword from "./components/pages/auth/ChangePassword.jsx";

export default function App() {


  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />



            <Route path="/" element={<ProfileLayout />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="/myorders" element={<MyOrder />} />
              <Route path="/mycard" element={<MyCard />} />
            </Route>



          </Route>

        </Routes>

      </BrowserRouter>

    </Provider>
  );
}


