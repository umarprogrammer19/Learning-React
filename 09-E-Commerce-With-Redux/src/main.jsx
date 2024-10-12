import { createRoot } from 'react-dom/client';
import App from './layout.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout.jsx';
import Products from './pages/products.jsx';
import SingleProduct from './pages/singleproduct.jsx';
import { Provider } from 'react-redux';
import { store } from './config/redux/store/store.js';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "",
    element: <Products />
  }, {
    path: "singleproduct/:id",
    element: <SingleProduct />
  }]
}]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
)
