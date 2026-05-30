import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";


export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: '/',
        element: <Protected><h1 className="text-7xl text-center flex justify-center items-center text-red-800">Home</h1></Protected>
    }

])