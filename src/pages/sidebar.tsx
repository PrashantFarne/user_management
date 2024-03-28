import React from "react";

const Sidebar = () => {
  return (
    <div className="flex justify-center custom-sidebar-bg">
      <div className="bg-gray-800 h-screen w-64">
        <div className="p-4" style={{ padding: "40px" }}>
          <div className="font-bold">User</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
