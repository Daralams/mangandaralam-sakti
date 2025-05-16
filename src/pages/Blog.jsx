import React from "react";
import { FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center text-white bg-[#1e293b] px-6 py-10 rounded-xl shadow-lg">
          <FileText size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold mb-2">
            No blog posts available at the moment
          </h2>
          <p className="text-gray-400">Please check back later for updates.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
