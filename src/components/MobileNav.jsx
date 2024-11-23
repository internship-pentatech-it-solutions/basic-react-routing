import { NavLink } from "react-router-dom";

const NavItems = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "About Us", url: "/about" },
  { name: "Contact Us", url: "/contact" },
];

const MobileNav = ({ openMenu, setOpenMenu }) => {
  const handleLinkClick = () => {
    setOpenMenu(false); // Close menu when a link is clicked
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#f40000] z-50 transition-transform ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      }`}>
      <nav className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col gap-4">
          {NavItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                onClick={handleLinkClick} // Trigger menu close
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f5a809] text-lg font-semibold"
                    : "text-[#ffffff] text-lg font-medium hover:text-[#f5a809]"
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
