import { NavLink, Outlet } from "react-router-dom";
export default function Navbar() {
  const activeClass = "bg-blue-700 px-3 py-1 rounded font-bold";
  const inactiveClass = "hover:bg-blue-600 px-3 py-1 rounded transition";
  return (
    <>
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex gap-6 max-w-3xl mx-auto">
          <li>
            <NavLink //When you use NavLink, you can pass a function to className or style. That function receives an object (e.g. { isActive, isPending, isTransitioning }) — and isActive is a boolean property inside that object. So isActive is not the object itself it's a boolean property inside the object the function receives.
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogsList"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Blogs List
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />;
    </>
  );
}
