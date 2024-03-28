import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64">
      <div className="p-4">
        <ul>
          <li>
            <div className="text-white hover:bg-gray-700 block py-2 px-4 rounded transition-colors duration-300">
              Link 1
            </div>
          </li>
          <li>
            <div className="text-white hover:bg-gray-700 block py-2 px-4 rounded transition-colors duration-300">
              Link 2
            </div>
          </li>
          <li>
            <div className="text-white hover:bg-gray-700 block py-2 px-4 rounded transition-colors duration-300">
              Link 3
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
