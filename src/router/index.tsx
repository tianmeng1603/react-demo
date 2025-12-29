import React from 'react';
import Layout from "@/pages/Layout";   
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from '@/components/AuthRoute';

// const Layout = lazy(() => import('@/pages/Layout'));
// const Login = lazy(() => import('@/pages/Login'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: []
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;