import { NavLink } from "react-router-dom";
import { preloadRoute } from "../utils/routeLoaders";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/music", label: "Music" },
  { to: "/projects", label: "Projects" },
];

const Header = () => {
  return (
    <header className="bg-primary text-primary-text fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto py-4 px-6 flex justify-center items-center">
        {/* Navigation Buttons */}
        <nav className="flex space-x-4 text-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-transform transform ${
                  isActive ? "bg-primary-text" : "bg-primary"
                } text-content hover:-translate-y-1 duration-400`
              }
              onMouseEnter={() => preloadRoute(item.to)}
              onFocus={() => preloadRoute(item.to)}
              onTouchStart={() => preloadRoute(item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
