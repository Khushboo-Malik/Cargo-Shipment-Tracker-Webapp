import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShipmentPage from "./pages/ShipmentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shipment/:id" element={<ShipmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
