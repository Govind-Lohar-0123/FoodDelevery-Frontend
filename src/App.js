import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDash from "./components/pages/Admin/AdminDash";
import ProfileDash from "./components/pages/UserProfile/ProfileDash";
import Profile from "./components/pages/UserProfile/profile";

import store from "./app/store.js";
import { Provider } from "react-redux";
import CardProvider from "./components/pages/CardProvider.js";
import { getToken } from "./components/pages/auth/tokenAction.js";
import MyCard from "./components/pages/UserProfile/MyCard.jsx";
import MyOrder from "./components/pages/UserProfile/MyOrder.js";
import Login from "./components/pages/auth/login.jsx";
import Register from "./components/pages/auth/register.js";

export default function App() {


  return (
    <Provider store={store}>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              
               
            
             <> <Route path="/" element={<ProfileDash />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/myorder" element={<MyOrder />} />
                <Route path="/mycard" element={<MyCard />} />
              </Route>
              <Route path="/" element={<AdminDash />}>
                <Route path="" element={<MyOrder />} />
              </Route>
              </>
              
            </Route>

          </Routes>

        </BrowserRouter>
      </CardProvider>
    </Provider>
  );
}


