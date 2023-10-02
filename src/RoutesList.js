import { Routes, Route } from "react-router-dom";
import Potato from "./Potato";
import Cheese from "./Cheese";
import Salt from "./Salt";
import VendingMachine from "./VendingMachine";


function RoutesList() {
  return (
    <Routes>
      <Route path="/potato" element={<Potato />} />
      <Route path="/cheese" element={<Cheese />} />
      <Route path="/salt" element={<Salt />} />
      <Route path="/" element={<VendingMachine />} />
    </Routes>
  );
}
export default RoutesList;