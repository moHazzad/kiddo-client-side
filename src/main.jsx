import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login & Register/Login.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Register from "./Components/Login & Register/Register.jsx";
import AllToys from "./Components/Pages/AllToys/AllToys.jsx";
import Blogs from "./Components/Pages/Blogs/Blogs.jsx";
import AddToy from "./Components/Pages/AddToy/AddToy.jsx";
import MyToy from "./Components/Pages/MyToy/MyToy.jsx";
import PrivetRout from "./Components/PrivetRout/PrivetRout.jsx";
import Home from "./Home.jsx";
import Error from "./Components/Pages/ErrorPage/Error.jsx";
import Edit from "./Components/Pages/MyToy/Edit.jsx";
import ViewDetails from "./Components/Pages/Home/ViewDetails.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivetRout><ViewDetails /></PrivetRout>,
        loader:({params}) => fetch(`https://the-toy-server-hazzadmdap-gmailcom.vercel.app/alltoys/${params.id}`) 
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register  />,
      },
      {
        path: "alltoys",
        element: <AllToys  />,
        // loader: ()=> fetch('http://localhost:5000/alltoys') 
      },
      {
        path: "addtoy",
        element: <PrivetRout><AddToy  />,</PrivetRout>
      },
      {
        path: "mytoy",
        element: <PrivetRout><MyToy  />,</PrivetRout>
      },
      {
        path: "edit/:id",
        element: <Edit />,
        loader: ({params}) =>fetch(`https://the-toy-server-hazzadmdap-gmailcom.vercel.app/alltoys/${params.id}`)
      },
      {
        path: "blogs",
        element: <Blogs  />,
      },
    ]
  },

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
