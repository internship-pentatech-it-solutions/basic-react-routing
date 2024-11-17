import { Link, NavLink } from "react-router-dom";

const NavItems = [
  { name: "Home", url: "/" },
  {
    name: "Shop",
    url: "/shop",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

const MobileNav = ({ openMenu }) => {
  return (
    <div
      className={`absolute top-0 bg-[#f40000] ${
        openMenu ? "hidden" : "block"
      }`}>
      <nav>
        <ul className="flex flex-col gap-4 justify-center">
          {NavItems.map((item, index) => (
            <li key={index} className="">
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f5a809] flex flex-col items-center"
                    : "text-[#ffffff] flex flex-col items-center"
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
