import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Screens
import { LandingScreen } from '../Screens/Landing/LandingPage/landing-page.screen';
import { DisplayProjectScreen } from '../Screens/Landing/Projects';
import { DisplayBlogScreen } from '../Screens/Landing/Blog';

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
    }
]);

export const RouterPlug = <RouterProvider router={ router } />
