import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import Feature1 from './Pages/Feature1.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import DemoPage from './Pages/DemoPage.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path:'/feature',
      element:<div>
        <Feature1/>
      </div>
    },
    {
      path:'/',
      element:<div>
        <HomePage/>
      </div>,
    },
    {
      path:'/login',
      element:<div>
        <LoginPage/>
      </div>,
    },
    {
      path:'/demo',
      element:<div>
        <DemoPage/>
      </div>,
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
