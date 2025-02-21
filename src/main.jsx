import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './comonent/Home';
import AuthProvider from './comonent/auth/AuthProvider';
import TaskManege from './comonent/TaskManege';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
      path: "/",
      element:<TaskManege></TaskManege>
    },
  ]
  },
]);
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
</React.StrictMode>
)
