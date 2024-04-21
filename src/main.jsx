import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Page404 from '../src/404/Page404'
import Home from './components/Home/Home';
import UpdateProfile from './components/Profile/UpdateProfile';
import LogIn from '../src/pages/LogIn'
import Register from './pages/Register';
import AuthProvider from './pages/AuthProvider';
import CardDetails from './components/Home/CardDetails/CardDetails';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import About from './pages/About';
import AddCart from './components/Home/CardDetails/AddCart';
import './App.css'
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/RealState.json')
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/state/:id",
        element: <PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
        loader: () => fetch('/RealState.json')
      },
      {
        path: "/profile",
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "/addCart",
        element:<PrivateRoute>
          <AddCart></AddCart>
        </PrivateRoute>
      },
      {
        path: "/updateProfile",
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      </HelmetProvider>
      
    </AuthProvider>

  </React.StrictMode>,
)
