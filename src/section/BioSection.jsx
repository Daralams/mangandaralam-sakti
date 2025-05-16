import React from "react";
import github from "../assets/stack/github.svg";
import linkedin from "../assets/stack/linkedin.svg";
import gmail from "../assets/stack/gmail.svg";
import profile from "../assets/profile.jpeg";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const BioSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#14012B] text-white px-4 py-12">
      {/* Top Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        {/* Profile Picture */}
        <div
          className="w-40 h-40 rounded-full border-4 shadow-lg overflow-hidden cursor-pointer"
          style={{ borderColor: "#9407B1" }}
        >
          <img
            src={profile}
            alt="Foto Profil"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Mangandaralam Sakti
          </h1>
          <p className="text-md text-gray-300 mt-1">
            Odoo Developer | Fullstack Developer
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link to="https://github.com/Daralams">
              <div className="bg-white p-1 rounded-full hover:scale-110 transition">
                <img
                  src={github}
                  alt="GitHub"
                  className="w-5 h-5 hover:scale-110 hover:opacity-80 transition"
                />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/mangandaralam-sakti/">
              <div className="bg-white p-1 rounded-full hover:scale-110 transition">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 hover:scale-110 hover:opacity-80 transition"
                />
              </div>
            </Link>
            <Link to="mailto:saktimangandaralam@gmail.com">
              <div className="bg-white p-1 rounded-full hover:scale-110 transition">
                <img
                  src={gmail}
                  alt="Gmail"
                  className="w-5 h-5 hover:scale-110 hover:opacity-80 transition"
                />
              </div>
            </Link>
          </div>

          {/* View Resume Button */}
          <div className="mt-4">
            <a
              href="/Mangandaralam Sakti_CV_Odoo_Fullstack_dev.pdf"
              download="CV Mangandaralam Sakti.pdf"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-2 rounded-md transition"
              style={{
                backgroundColor: "#9407B1",
              }}
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Description Box */}
      <div
        className="mt-10 max-w-2xl w-full border rounded-md p-4 text-md text-gray-300"
        style={{ borderColor: "#9407B1" }}
      >
        <p>
          Hi 👋 thank you for visiting my portfolio, I am Mangandaralam Sakti an
          Odoo Developer and Fullstack Developer. My high interest in the world
          of technology makes me continue to explore various latest technologies
          in the world of programming. I enjoy creating and developing software
          and applications that are useful and can solve problems or optimize
          the company's business system. Let's connect and collaborate.
        </p>
      </div>
    </section>
  );
};

export default BioSection;
