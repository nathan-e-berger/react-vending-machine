import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>You are in a vending machine.</h1>
      <ul>
        <li>
      <Link to="/potato">Potato</Link>
        </li>
        <li>
      <Link to="/cheese">Cheese</Link>
        </li>
        <li>
      <Link to="/salt">Salt</Link>
        </li>
      </ul>
    </div>
  );
}
export default VendingMachine;
