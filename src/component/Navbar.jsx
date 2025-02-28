import { NavLink } from "react-router-dom";
import BajoLogo from "../assets/img/nav-icon.png";

const Navbar = () => {
  const arrNavbar = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header>
      <nav className="flex justify-between items-center px-[40px] h-[87px] border-b border-white/[0.14]">
        <img className="w-[170px]" src={BajoLogo} alt="nav-logo" />
        <ul className="space-x-[30px] flex justify-center items-center">
          {arrNavbar.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  `text-[16px] ${
                    isActive ? "border-b-2 border-white text-gray-200" : ""
                  }`
                }
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <li className="text-white">Login</li>
          <li className="text-white">Register</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
