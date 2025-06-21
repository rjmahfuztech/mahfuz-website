import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
