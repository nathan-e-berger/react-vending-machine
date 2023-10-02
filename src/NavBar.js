import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/potato">Potato</NavLink>
      <NavLink to="/cheese">Cheese</NavLink>
      <NavLink to="/salt">Salt</NavLink>
    </div>
  );

}

export default NavBar;
