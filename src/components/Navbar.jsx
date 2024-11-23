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

const Navbar = () => {
  return (
    <nav className="hidden lg:block">
      <div className="">
        <ul className="flex gap-4 justify-center">
          {NavItems.map((item, index) => (
            <li key={index} className="text-base">
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
      </div>
    </nav>
  );
};

export default Navbar;
