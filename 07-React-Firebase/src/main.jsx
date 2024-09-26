import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Register from './pages/register';
import Todo from './pages/todo';
import Login from './pages/login';

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
        path: "",
        element: <Login />,
    }, {
        path: "register",
        element: <Register />
    }, {
        path: "todo",
        element: <Todo />,
    }]
}]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
)
