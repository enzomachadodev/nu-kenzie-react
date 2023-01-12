import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";

const RoutesMain = () => (
	<Routes>
		<Route path="/" element={<LandingPage />} />
		<Route path="/dashboard" element={<Dashboard />} />
	</Routes>
);

export default RoutesMain;
