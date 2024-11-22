import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div></div>,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      }
    ]
  }
])

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
