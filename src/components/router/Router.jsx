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



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                path: '/events',
                element: <Events></Events>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/event/:id',
                element: <Event></Event>,
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