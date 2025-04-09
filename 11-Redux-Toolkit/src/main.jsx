import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './screens/Home.jsx';
import LoginPage from './screens/Login.jsx';
import SignupPage from './screens/Signup.jsx';
import { store } from './store/store.js';
import ProtectedRoute from './components/ProtectedRoutes.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
}]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
