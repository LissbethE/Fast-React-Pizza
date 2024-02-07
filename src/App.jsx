import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';

import Menu, { loader as menuLoader } from './features/menu/Menu';

import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';

////////////////////////////
// createBrowserRouter > Load data and submit data using form
// since version 6.4, if we want to use the new powerful APIs like data loaders, data actions, or data features,
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },

      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      { path: '/cart', element: <Cart /> },

      ////////////////////////////
      // O R D E R
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },

      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

////////////////////////////
function App() {
  return <RouterProvider router={router} />;
}

export default App;
