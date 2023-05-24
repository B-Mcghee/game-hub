import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import GameDetailPage from "../components/pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
