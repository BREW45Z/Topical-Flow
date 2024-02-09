// GenerateArticlePage.tsx
import React from 'react';
import Sidebar from '../shared/sidebar'; // Adjust the path based on your project structure

const GenerateArticle: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-4">
        <div className="w-96 h-14 px-3.5 py-4 bg-primary rounded-lg shadow border border-gray-400 justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="w-5 h-5 relative" />
            <div className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">Search articles</div>
          </div>
        </div>

        {/* Add your table or other components here */}
      </div>
    </div>
  );
};

export default GenerateArticle;
