import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolPage from './pages/ToolPage';
import AdPlaceholder from './components/AdPlaceholder';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-100">
        <Header />
        {/* Add padding-top to account for fixed header height */}
        <div className="pt-16">
          <AdPlaceholder message="Top Banner Ad (970x90)" className="h-24" />
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/:toolId" element={<ToolPage />} />
                </Routes>
              </div>
              <aside className="w-full lg:w-48 flex-shrink-0">
                <AdPlaceholder message="Side Ad (160x600)" className="h-full min-h-[600px] hidden lg:flex" />
                <AdPlaceholder message="Side Ad (300x250)" className="h-64 flex lg:hidden" />
              </aside>
            </div>
          </main>
          <AdPlaceholder message="Bottom Banner Ad (970x90)" className="h-24" />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;