
import React from 'react';
import { TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          Every tool you need to work with PDFs in one place
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Merge, split, compress, convert, rotate, unlock and protect PDFs with just a few clicks. Discover our suite of powerful, easy-to-use tools.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
