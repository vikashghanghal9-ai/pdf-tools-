
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../constants';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { id, title, description, Icon, color } = tool;

  return (
    <Link
      to={`/${id}`}
      className="group flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-transparent hover:border-primary dark:hover:border-primary-light"
    >
      <Icon className={`h-16 w-16 ${color} transition-transform duration-300 group-hover:scale-110`} />
      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">{description}</p>
    </Link>
  );
};

export default ToolCard;
