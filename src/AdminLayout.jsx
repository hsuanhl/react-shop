import AdminHeader from './components/AdminHeader';
import Footer from './components/Footer';
import MessageToast from './components/MessageToast';
import { Outlet, ScrollRestoration } from 'react-router';

const AdminLayout = () => {
  return (
    <>
      <MessageToast />
      <AdminHeader />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};
export default AdminLayout;
