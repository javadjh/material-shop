import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/Admin.layout";
import DashboardAdmin from "../dashboard/Dashboard.admin";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Brand from "../pages/brand/Brand";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      <AdminLayout>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="brand" element={<Brand />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
};
export default RoutesComponent;
