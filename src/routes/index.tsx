import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home';
import IndexAbout from '../pages/About/index';
import IndexProjects from '../pages/Projects';
import DetailProject from '../pages/Projects/DetailProject';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <IndexAbout />,
            },
            {
                path: 'projects',
                element: <IndexProjects />,
            },
            {
                path: 'projects/:id',
                element: <DetailProject />,
            }
        ],
    },
]);