import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { useEffect } from 'react';
import { track } from '@vercel/analytics';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    track('pageview', { url: location.pathname });
  }, [location]);
  
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;