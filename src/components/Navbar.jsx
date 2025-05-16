import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Certification", path: "/certification" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full bg-[#14012B] text-white fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold"
            style={{ color: "#9407B1" }}
          >
            MS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium px-4 py-2 rounded transition ${
                    isActive
                      ? "text-[#9407B1]"
                      : "text-white hover:text-[#9407B1]"
                  }`
                }
                style={{ hover: "#9407B1" }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#14012B] flex flex-col items-center py-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium px-4 py-2 rounded transition ${
                  isActive
                    ? "text-[#9407B1]"
                    : "text-white hover:text-[#9407B1]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
