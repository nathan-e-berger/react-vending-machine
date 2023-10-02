import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <>
      <Link to="/potato">Potato</Link>
      <Link to="/cheese">Cheese</Link>
      <Link to="/salt">Salt</Link>
    </>
  );
}
export default VendingMachine;