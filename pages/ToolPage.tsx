
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TOOLS } from '../constants';
import FileProcessor from '../components/FileProcessor';
import { ChevronLeftIcon } from '../components/icons';

const ToolPage: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = TOOLS.find((t) => t.id === toolId);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="flex items-center gap-2 text-primary dark:text-primary-light hover:underline mb-6">
        <ChevronLeftIcon className="h-5 w-5" />
        Back to all tools
      </Link>
      <div className="text-center mb-8">
        <tool.Icon className={`h-20 w-20 mx-auto ${tool.color}`} />
        <h1 className="mt-4 text-4xl font-bold text-gray-800 dark:text-white">{tool.title}</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{tool.description}</p>
      </div>
      <FileProcessor tool={tool} />
    </div>
  );
};

export default ToolPage;
