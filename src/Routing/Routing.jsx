import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Home from "../jobs/Home";
import Navbar from "../common/Navbar";
import Myapplication from "../jobs/Myapplication";
import AddApplication from "../jobs/AddApplication";
import AllJobsAdmin from "../jobs/AllJobsAdmin";

function Routing() {
  return (
    <div className="gap-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MyApplications" element={<Myapplication />} />
        <Route path="/AddApplication" element={<AddApplication />} />
        <Route path="/AllJobsAdmin" element={<AllJobsAdmin />} />
      </Routes>
    </div>
  );
}

export default Routing;
