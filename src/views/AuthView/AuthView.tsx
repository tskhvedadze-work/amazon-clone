import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthLayout } from "@src/layouts/AuthLayout";

const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));

export default function AuthView() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Route>
    </Routes>
  );
}
