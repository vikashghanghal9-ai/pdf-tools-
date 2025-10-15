
import React, { useState, useEffect, useRef } from 'react';
import { Tool } from '../constants';
import { UploadCloudIcon, FileIcon, XIcon, DownloadIcon } from './icons';

interface FileProcessorProps {
  tool: Tool;
}

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-linear" 
            style={{ width: `${progress}%` }}
        ></div>
    </div>
);


const FileProcessor: React.FC<FileProcessorProps> = ({ tool }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      resetState();
    }
  };
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files));
      resetState();
      e.dataTransfer.clearData();
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const resetState = () => {
      setIsProcessing(false);
      setProgress(0);
      setIsComplete(false);
  }

  const handleProcess = () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setIsComplete(false);
    setProgress(0);

    // Simulate file processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  
  const handleDownload = () => {
    // In a real app, this would trigger a download from a URL.
    alert("Download started! (This is a simulation)");
  };
  
  const handleTryAgain = () => {
      setFiles([]);
      resetState();
  };

  if (isComplete) {
      return (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">Processing Complete!</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Your file is ready to be downloaded.</p>
              <button
                  onClick={handleDownload}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                  <DownloadIcon className="h-6 w-6" />
                  Download File
              </button>
              <button
                onClick={handleTryAgain}
                className="mt-4 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Process another file
              </button>
          </div>
      );
  }

  if (files.length > 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Selected Files:</h3>
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2 mb-6">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center gap-3 min-w-0">
                    <FileIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
                    <span className="truncate text-sm font-medium">{file.name}</span>
                </div>
                <button onClick={() => removeFile(index)} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                    <XIcon className="h-5 w-5 text-gray-500" />
                </button>
            </div>
          ))}
        </div>
        {isProcessing ? (
             <div className="text-center">
                <p className="text-lg font-medium mb-2">Processing...</p>
                <ProgressBar progress={progress} />
                <p className="text-sm text-gray-500 mt-2">{progress}%</p>
             </div>
        ) : (
            <button
                onClick={handleProcess}
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 disabled:bg-gray-400"
                disabled={files.length === 0}
            >
                {tool.title}
            </button>
        )}
      </div>
    );
  }

  return (
    <div 
        className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-4 border-dashed ${isDragging ? 'border-primary' : 'border-gray-300 dark:border-gray-600'} transition-colors duration-300`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <UploadCloudIcon className="h-20 w-20 text-gray-400 dark:text-gray-500" />
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Drag & Drop files here</p>
        <p className="text-gray-500 dark:text-gray-400">or</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept=".pdf, .jpg, .jpeg, .png"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
        >
          Select Files
        </button>
      </div>
    </div>
  );
};

export default FileProcessor;
