import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Notification from "../pages/notifications/notifications";
import Explore from "../pages/explore/explore";
import Layout from "../layout/layout";
import Login from "../pages/login/login";

const routes = createBrowserRouter([
    {
        
        path: '/login',
        element: <Login />
        
        // path: '/',
        // element: <Layout />,
        // children: [
        //     {
        //         index: true,
        //         element: <Home />
        //     },
        //     {
        //         path: 'explore',
        //         element: <Explore />
        //     },
        //     {
        //         path: 'notification',
        //         element: <Notification />
        //     },
        //     {
        //         path: 'profile',
        //         element: 'profile component'
        //     },
        //     {
        //         path: 'login',
        //         element: <Login />
        //     },
        //     {
        //         path: '*',
        //         element: 'sayfa bulunamadı'
        //     }
        // ]
    },
   
])

export default routes;