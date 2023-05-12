import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './components/Providers/AuthProviders';


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
  </div>
);
