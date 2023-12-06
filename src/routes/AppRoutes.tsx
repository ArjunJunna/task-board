import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MetricsPage from "../pages/MetricsPage";
import '../App.css'


const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/metrics" element={<MetricsPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
