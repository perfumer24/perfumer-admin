import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MyPage from "./pages/MyPage";
import ErrorPage from "./pages/ErrorPage";
import PerfumePage from "./pages/PerfumePage";
import BrandPage from "./pages/BrandPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PerfumePage /> },
      {
        path: "/perfume",
        element: <PerfumePage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/brand",
        element: <BrandPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
