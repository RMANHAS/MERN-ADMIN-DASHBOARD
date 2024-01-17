import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./auth/Login";
import Dashboard from "./pages/user/Dashboard";

import ForgetPassword from "./auth/ForgetPassword";
import AdminRoutess from "./routes/AdminRoutess";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PrivateRoutess from "./routes/PrivateRoutess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* protected routes */}
          <Route path="/dashboard" element={<PrivateRoutess />}>
            <Route path="user" element={<Dashboard />} />
          </Route>

          {/* protected routes  for admin/super-user*/}
          <Route path="/dashboard" element={<AdminRoutess />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
