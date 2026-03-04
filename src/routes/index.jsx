import Home from '../pages/Home';
import Layout from '../Layout';
import Products from '../pages/Products';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductList from '../pages/ProductList';
import AdminLayout from '../AdminLayout';
import FaqPage from '../pages/FaqPage';
import PrivacyPage from '../pages/PrivacyPage';
import OrderList from '../pages/OrderList';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
      {
        path: '/privacy',
        element: <PrivacyPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'productList',
        element: <ProductList />,
      },
      {
        path: 'orderList',
        element: <OrderList />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
