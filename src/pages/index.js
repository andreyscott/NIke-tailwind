import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/app-layout/index";

const Pages = () => {
  return (
    <Routes>
    <Route path="/*" element={<AppLayout />}></Route>
  </Routes>
  );
};

export default Pages;
