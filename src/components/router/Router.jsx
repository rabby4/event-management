import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Events from "../pages/Events/Events";
import Event from "../pages/Events/Event";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: '/events',
                element: <PrivateRoute><Events></Events></PrivateRoute>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/event/:id',
                element: <PrivateRoute><Event></Event></PrivateRoute>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default Router;