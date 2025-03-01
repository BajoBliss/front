import { Link, NavLink } from "react-router-dom";
import BajoLogo from "../../assets/img/nav-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IndoFlag from "../../assets/img/indonesia-flag.webp";
import EngFlag from "../../assets/img/usa-flag.webp";
import { useState } from "react";
import { arrNavbar } from "../../data/local/Navigations";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false); // Default is Indonesian selected

  return (
    <>
      {/* Mobile Navigation */}
      <div className="drawer sm:hidden ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col z-40 !w-full">
          {/* Navbar */}
          <div className="navbar bg-base-300 ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 justify-between items-center">
              <Link to="/" className="hover:cursor-pointer ">
                <img className="w-[120px]" src={BajoLogo} alt="nav-logo" />
              </Link>
              <div className="flex justify-end items-center space-x-[20px] pr-[10px]">
                <FontAwesomeIcon
                  icon={"magnifying-glass"}
                  className="hover:cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={"cart-shopping"}
                  className="hover:cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={"user"}
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 h-full w-72 p-4 z-20">
            {/* Sidebar content here */}
            <div className="mt-[64px] overflow-y-auto max-h-[80vh]">
              {arrNavbar.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `text-[16px] ${isActive ? " text-gray-200" : ""}`
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </div>

            <div className="flex-grow"></div>
            <hr className="border-t border-gray-100 border-opacity-20" />
            <label className="grid cursor-pointer place-items-start ml-0.5 mt-4">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle toggle-lg theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                checked={isChecked} // bind the state to this checkbox
                onChange={() => setIsChecked(!isChecked)} // toggle the checkbox state when clicked
              />
              {!isChecked ? (
                <img
                  src={IndoFlag}
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1 w-[16px] h-[12px] ml-2 mt-2.5 transition"
                  alt=""
                />
              ) : (
                <img
                  src={EngFlag}
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1 w-[16px] h-[12px] mr-[10rem] mt-2.5 transition"
                  alt=""
                />
              )}
            </label>
          </ul>
        </div>
      </div>

      <header className="hidden sm:block">
        <nav className="flex justify-between items-center px-[40px] h-[87px] border-b border-white/[0.14]">
          <Link to="/" className="hover:cursor-pointer">
            <img className="w-[170px]" src={BajoLogo} alt="nav-logo" />
          </Link>
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
          <ul className="flex justify-end items-center space-x-[30px]">
            <FontAwesomeIcon
              icon={"magnifying-glass"}
              className="hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={"cart-shopping"}
              className="hover:cursor-pointer"
            />
            <FontAwesomeIcon icon={"user"} className="hover:cursor-pointer" />
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle toggle-lg theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                checked={isChecked} // bind the state to this checkbox
                onChange={() => setIsChecked(!isChecked)} // toggle the checkbox state when clicked
              />
              {!isChecked ? (
                <img
                  src={IndoFlag}
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1 w-[16px] h-[12px] ml-2 transition"
                  alt=""
                />
              ) : (
                <img
                  src={EngFlag}
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1 w-[16px] h-[12px] mr-2 transition"
                  alt=""
                />
              )}
            </label>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
