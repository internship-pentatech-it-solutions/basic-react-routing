import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#f40000] mt-8">
      <div className="grid grid-cols-3">
        <div>
          <h2>Quick Links</h2>
          <ul className="text-white">
            {NavItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Follow Mattress Home</h2>
          <ul className="text-white flex">
            {SocialItems.map((social, index) => (
              <li key={index}>
                <Link to={social.url}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>About Us</h2>
          <p>
            Mattress Home is dedicated to providing quality and affordable
            mattresses for your best rest. Our mission is to ensure that
            everyone can enjoy a good night's sleep with our wide range of
            products.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const NavItems = [
  { name: "View Products", url: "/" },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Services",
    url: "/shop",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

const SocialItems = [
  { icon: <FaFacebook />, url: "/" },
  {
    icon: <BsTwitterX />,
    url: "/",
  },
  {
    icon: <FaInstagram />,
    url: "/",
  },
  {
    icon: <FaLinkedin />,
    url: "/",
  },
];
