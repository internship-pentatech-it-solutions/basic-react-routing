import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#f40000]  mt-8">
      <div className="custom-width grid grid-cols-1 gap-6 lg:grid-cols-3 py-8">
        <div>
          <h2 className="text-white font-bold mb-2">Quick Links</h2>
          <ul className="text-white">
            {NavItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white">Follow Mattress Home</h2>
          <ul className="text-white flex items-center gap-4">
            {SocialItems.map((social, index) => (
              <li key={index}>
                <Link to={social.url} className="text-3xl">
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold mb-2">About Us</h2>
          <p className="text-white">
            Mattress Home is dedicated to providing quality and affordable
            mattresses for your best rest. Our mission is to ensure that
            everyone can enjoy a good night's sleep with our wide range of
            products.
          </p>
        </div>
      </div>
      <div className="bg-slate-800 text-white flex gap-8 justify-center">
        <p>developed by Lord Baah</p>
        <a href="https://github.com/lordbaah">Follow me on Github</a>
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
