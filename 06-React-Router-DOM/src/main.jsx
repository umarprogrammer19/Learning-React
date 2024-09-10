import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Skills from "./pages/Skills"


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: "",
    element: <Home />,
  }, {
    path: "about",
    element: <About />
  }, {
    path: "contact",
    element: <Contact />,
  }, {
    path: "services",
    element: <Services />,
  }, {
    path: "skills",
    element: <Skills />,
  }]
}]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
