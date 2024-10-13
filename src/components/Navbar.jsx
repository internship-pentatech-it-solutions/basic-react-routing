import React from "react";

import { Link, NavLink } from "react-router-dom";
const NavItems = [
  { name: "Home", url: "/" },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "contact",
    url: "/contact",
  },
  {
    name: "shop",
    url: "/shop",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="bg-blue-400 p-8">
        <ul className="flex justify-between">
          {NavItems.map((item, index) => (
            <li key={index} className="text-xl xl:text-2xl">
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ee4d31] flex flex-col items-center"
                    : "text-[#1a1f51] flex flex-col items-center"
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
