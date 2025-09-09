import logo from "./foot wear LOGO.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="flex items-center justify-between px-8 py-2">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="FootShop Logo"
              className="w-[100px]"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to={"/"}
              className="font-semibold text-gray-700 transition hover:text-indigo-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/Products"}
              className="font-semibold text-gray-700 transition hover:text-indigo-600"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
