import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Screens
import { LandingScreen } from '../Screens/Landing/LandingPage/landing-page.screen';
import { DisplayProjectScreen } from '../Screens/Landing/Projects';
import { DisplayBlogScreen } from '../Screens/Landing/Blog';
import { SpecificPostScreen } from '../Screens/Landing/Blog/specific-post.screen';

// Dashborad screen
import { CreateBlogScreen } from '../Screens/Dashboard/Create-Blog/create-blog.screen';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingScreen />
    },
    {
        path: "/projects",
        element: <DisplayProjectScreen />
    },
    {
        path: "/blog",
        element: <DisplayBlogScreen />
    },
    {
        path: "/blog/:id",
        element: <SpecificPostScreen />
    },
    {
        path: "/dashboard/create-blog",
        element: <CreateBlogScreen />
    }
]);

export const RouterPlug = <RouterProvider router={ router } />
