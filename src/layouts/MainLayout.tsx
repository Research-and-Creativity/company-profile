import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
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