import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import ProfileLayout from "./components/pages/UserProfile/ProfileLayout.jsx";
import MyProfile from "./components/pages/UserProfile/MyProfile.jsx";


import { Provider } from "react-redux";

import store from "./components/app/store.js";
import MyCards from "./components/pages/UserProfile/MyCards.jsx";
import MyOrders from "./components/pages/UserProfile/MyOrders.jsx";
import Login from "./components/pages/auth/Login.jsx";
import Register from "./components/pages/auth/Register.jsx";
import ResetPassword from "./components/pages/auth/ResetPassword.jsx";
import ForgetPassword from "./components/pages/auth/ForgetPassword.jsx";
import ChangePassword from "./components/pages/auth/ChangePassword.jsx";
import { getToken } from "./components/pages/auth/tokenAction.js";

export default function App() {
  let email = window.localStorage.getItem("email");
  let isLogin = getToken();

  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/reset-password" element={(email) ? <ResetPassword /> : <Navigate replace to="/login" />} />
            <Route path="/forget-password" element={<ForgetPassword />} />



            <Route path="/" element={(isLogin) ? <ProfileLayout /> : <Navigate replace to="/login" />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="/myorders" element={<MyOrders />} />
              <Route path="/mycards" element={<MyCards />} />
              <Route path="/change-password" element={<ChangePassword />} />

            </Route>



          </Route>

        </Routes>

      </BrowserRouter>

    </Provider>
  );
}


