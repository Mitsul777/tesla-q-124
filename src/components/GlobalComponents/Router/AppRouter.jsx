import React from "react";
import { Route, Routes } from "react-router";
import { routes } from "../../../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((i) => (
        <Route key={i.path} path={i.path} element={<i.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
