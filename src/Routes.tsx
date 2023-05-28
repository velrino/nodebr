import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom"
import { ProtectedRoutes, PublicRoutes } from "./utils/route"
import { HomePage } from "./pages/home"

export const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path='*' element={<Navigate replace to="/not-found" />} />
    {/* <Route path='/not-found' element={<NotFoundPage />} /> */}
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="/" element={<PublicRoutes />}>
      {/* <Route path="/" element={<Navigate replace to="dashboard" />} /> */}
      <Route path="home" element={<HomePage />} />
    </Route>
  </Routes>
)