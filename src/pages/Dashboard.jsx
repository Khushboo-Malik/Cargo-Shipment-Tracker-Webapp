import ShipmentList from "../components/ShipmentList";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Shipment Dashboard</h1>
      <ShipmentList />
    </div>
  );
};

export default Dashboard;
