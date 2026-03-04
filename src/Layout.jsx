import Header from './components/Header';
import Footer from './components/Footer';
import MessageToast from './components/MessageToast';
import { Outlet, ScrollRestoration } from 'react-router';

const Layout = () => {
  return (
    <>
      <MessageToast />
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};
export default Layout;
