import Root from "../layout/Root";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/homepage/Home";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: ""
            },
            {
                path: "/course",
                element: ""
            },
            {
                path: "/contact",
                element: ""
            }
        ]
    }
])

export default routes;