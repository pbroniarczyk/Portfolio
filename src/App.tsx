import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './views/About';
import Contact from './views/Contact';
import Experience from './views/Experience';
import Home from './views/Home';

import './main.scss';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
];

const router = createBrowserRouter(routes, {
  basename: '/',
});

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
