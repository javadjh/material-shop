import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/Admin.layout";
import DashboardAdmin from "../dashboard/Dashboard.admin";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Brand from "../pages/brand/Brand";
import Report from "../pages/reports/Report";
import Jobs from "../pages/jobs/Jobs";
import JobInfo from "../pages/job-info/JobInfo";

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
          <Route path="report" element={<Report />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobinfo" element={<JobInfo />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
};
export default RoutesComponent;
