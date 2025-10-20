import { NavLink ,Outlet} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md min-h-screen">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">DevPortal</h1>

        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className="text-lg transition-all duration-300 hover:text-green-400"
            >
              Developer Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addInfo"
              className="text-lg transition-all duration-300 hover:text-green-400"
            >
              Add Developer
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
