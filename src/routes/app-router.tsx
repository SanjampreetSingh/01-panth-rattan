import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello</h1>,
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
