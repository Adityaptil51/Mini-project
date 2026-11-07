import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Public/LoginPage.jsx";
import HomePage from "../pages/Public/HomePage.jsx";
import Programmes from "../pages/Public/Programmes.jsx";
import AdmissionProcess from "../pages/Public/AdmissionProcess.jsx";

import RegisterPage from "../pages/Public/RegisterPage.jsx";
import ApplicantDashboard from "../pages/Applicant/ApplicantDashboard.jsx";
import EditProfile from "../pages/Applicant/EditProfile.jsx";
import OfficerDashboard from "../pages/Officer/OfficerDashboard.jsx";

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <h1 className="text-3xl font-bold text-[#173b61]">
        {title} — Coming Soon
      </h1>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/Programmes" element={<Programmes />} />

        <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />

        <Route path="/applicant/edit-profile" element={<EditProfile />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/officer/dashboard" element={<OfficerDashboard />} />

        <Route path="/admission-process" element={<AdmissionProcess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
