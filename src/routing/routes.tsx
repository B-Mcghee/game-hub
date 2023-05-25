import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import GameDetailPage from "../components/pages/GameDetailPage";
import ErrorPage from "../components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
