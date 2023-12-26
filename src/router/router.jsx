import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Notification from "../pages/notifications/notifications";
import Explore from "../pages/explore/explore";
import Layout from "../layout/layout";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";
import User from "../pages/user/user";
import Lists from "../pages/lists/lists";
import Messages from "../pages/messages/messages";
import Communities from "../pages/communities/communities";
import Premium from "../pages/premium/premium";
import Bookmarks from "../pages/bookmarks/bookmarks";

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: '/explore',
                        element: <Explore />
                    },
                    {
                        path: '/lists',
                        element: <Lists />
                    },
                    {
                        path: '/messages',
                        element: <Messages />
                    },
                    {
                        path: '/communities',
                        element: <Communities />
                    },
                    {
                        path: '/premium',
                        element: <Premium />
                    },
                    {
                        path: '/bookmarks',
                        element: <Bookmarks />
                    },
                    {
                        path: '/notification',
                        element: <Notification />
                    },
                    {
                        path: '/profile',
                        element: <Profile />
                    },
                    {
                        path: '/:userdataname',
                        element: <User />
                    },
                    {
                        path: '*',
                        element: 'sayfa bulunamadı'
                    }
                    ]
    }
])
             
export default routes;
        