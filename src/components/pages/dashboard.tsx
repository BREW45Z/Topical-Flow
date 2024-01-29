import React from 'react';
import Sidebar from '../shared/sidebar';

const PageWithSidebar: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-white shadow-md border-r border-gray-300 h-screen w-1/5 fixed">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default PageWithSidebar;
