import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Homapage/Home.jsx";
import About from "./pages/About/About.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Login from "./components/authComponents/Login.jsx";
import Register from "./components/authComponents/Register.jsx";
import Auth from "./pages/Auth.jsx";
import UserProfile from "./components/UserProfile.jsx";
import CreateBike from "./components/createComponents/CreateBike.jsx";
import ForgottenPassword from "./components/authComponents/ForgottenPassword.jsx";
import Cart from "./components/dashComponents/Cart.jsx";
import { GlobalUser, OrdersManager } from "./context/GlobalUserProvider.jsx";
import ManagerOrders from "./components/dashComponents/managerComponents/ManagerOrders.jsx";
import WorkerOrders from "./components/dashComponents/workerComponents/WorkerOrders.jsx";
import WorkerFinished from "./components/dashComponents/workerComponents/WorkerFinished.jsx";
import UserInfo from "./components/dashComponents/userComponents/UserInfo.jsx";
import Employers from "./components/dashComponents/managerComponents/Employers.jsx";

function App() {
  return (
    <GlobalUser>
      <OrdersManager>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="profile" element={<UserProfile />}>
              <Route index element={<Navigate replace to="info" />} />
              <Route path="info" element={<UserInfo />} />
              <Route path={"cart"} element={<Cart />} />
              <Route path={"user-ready"} element={<Cart />} />
              <Route path={"user-in-progress"} element={<Cart />} />
              <Route path={"user-archive"} element={<Cart />} />
              <Route path="workerOrders" element={<WorkerOrders />} />
              <Route path={"finished"} element={<WorkerFinished />} />
              <Route path={"managerOrders"} element={<ManagerOrders />} />
              <Route path={"manager-in-progress"} />
              <Route path={"manager-ready"} />
              <Route path={"manager-finished"} />
              <Route path={"employers"} element={<Employers />} />
              <Route path={"statistic"} />
            </Route>

            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="create" />} />
              <Route path={"create"} element={<CreateBike />} />
            </Route>

            <Route path="auth" element={<Auth />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="forgotten-password"
                element={<ForgottenPassword />}
              />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </OrdersManager>
    </GlobalUser>
  );
}

export default App;
