import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Screens
import { LandingScreen } from '../Screens/Landing/LandingPage/landing-page.screen';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingScreen />
    },
    {
        path: "/projects",
        element: <div>Projects</div>
    },
    {
        path: "/blog",
        element: <div>Blog</div>
    }
]);

export const RouterPlug = <RouterProvider router={ router } />
