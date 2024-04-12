import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col justify-between h-full min-h-screen">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
