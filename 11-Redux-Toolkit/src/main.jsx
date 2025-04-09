import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { store } from './store/store.js'
import Layout from './Layout.jsx'
import Home from './screens/Home.jsx'
import SignupPage from './screens/Signup.jsx'
import LoginPage from './screens/Login.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "",
    element: <Home />
  }, {
    path: "/signup",
    element: <SignupPage />
  }, {
    path: "/login",
    element: <LoginPage />
  }]
}]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
