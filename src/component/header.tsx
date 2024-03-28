import React from "react";
import "./style.css";

const Header = ({ title = "" }) => {
  return (
    <header className="bg-gray-800 text-white py-4 bg-custom-header">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
