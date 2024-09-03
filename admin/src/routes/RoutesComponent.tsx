import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/Admin.layout";
import DashboardAdmin from "../dashboard/Dashboard.admin";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Brand from "../pages/brand/Brand";
import Report from "../pages/reports/Report";
import Jobs from "../pages/jobs/Jobs";
import JobInfo from "../pages/job-info/JobInfo";
import Seller from "../pages/seller/Seller";
import Product from "../pages/product/Product";
import UpsertProduct from "../pages/product/upsert/UpsertProduct";
import Category from "../pages/category/Category";
import CategoryContextProvider from "../pages/category/category.context";
import AppSetting from "../pages/appsetting/AppSetting";
import Team from "../pages/team/Team";
import MainLayout from "../layout/Main.layout";
import UsersChats from "../pages/chats/UsersChats";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* <Route path="dash" element={<MainLayout />} /> */}
      </Routes>
      <MainLayout>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="brand" element={<Brand />} />
          <Route path="report" element={<Report />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobinfo" element={<JobInfo />} />
          <Route path="seller" element={<Seller />} />
          <Route path="product" element={<Product />} />
          <Route path="upsert-product" element={<UpsertProduct />} />
          <Route path="appsetting" element={<AppSetting />} />
          <Route path="team" element={<Team />} />
          <Route path="chat" element={<UsersChats />} />
          <Route
            path="category"
            element={
              <CategoryContextProvider>
                <Category />
              </CategoryContextProvider>
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
export default RoutesComponent;
