import Home from "../pages/Home";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
