import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "../redux/shipmentSlice";
import { Link } from "react-router-dom";

const ShipmentList = () => {
  const dispatch = useDispatch();
  const { shipments, loading, error } = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  if (loading) return <p>Loading shipments...</p>;
  if (error) return <p>Error loading shipments: {error}</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Shipments</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Container ID</th>
            <th className="border p-2">Current Location</th>
            <th className="border p-2">ETA</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.shipmentId} className="border">
              <td className="border p-2">{shipment.shipmentId}</td>
              <td className="border p-2">{shipment.containerId}</td>
              <td className="border p-2">{shipment.currentLocation.locationName}</td>
              <td className="border p-2">{shipment.currentETA}</td>
              <td className="border p-2">{shipment.status}</td>
              <td className="border p-2">
                <Link
                  to={`/shipment/${shipment.shipmentId}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentList;
