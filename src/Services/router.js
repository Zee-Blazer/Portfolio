import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Screens
import { LandingScreen } from '../Screens/Landing/LandingPage/landing-page.screen';
import { DisplayProjectScreen } from '../Screens/Landing/Projects';
import { DisplayBlogScreen } from '../Screens/Landing/Blog';
import { SpecificPostScreen } from '../Screens/Landing/Blog/specific-post.screen';

// Dashborad screen
import { CreateBlogScreen } from '../Screens/Dashboard/Create-Blog/create-blog.screen';
import { MessagesScreen } from '../Screens/Dashboard/Messages/messages.screen';
import { AddProjectScreen } from '../Screens/Dashboard/Projects/add-project.screen';
import { BlogsScreen } from '../Screens/Dashboard/Create-Blog/blogs.screen';
import { ProjectScreen } from '../Screens/Dashboard/Projects/project.screen';

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
        path: "/blog/:route/:id",
        element: <SpecificPostScreen />
    },
    {
        path: "/dashboard/create-blog",
        element: <CreateBlogScreen />
    },
    {
        path: "/dashboard/all-messages",
        element: <MessagesScreen />
    },
    {
        path: "/dashboard/add-project",
        element: <AddProjectScreen />
    },
    {
        path: "/dashboard/blogs",
        element: <BlogsScreen />
    },
    {
        path: "/dashboard/projects",
        element: <ProjectScreen />
    }
]);

export const RouterPlug = <RouterProvider router={ router } />
