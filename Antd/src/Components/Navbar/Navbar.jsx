import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className=" flex flex-row no-underline gap-2 justify-center">
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
