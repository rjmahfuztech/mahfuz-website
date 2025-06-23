import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
