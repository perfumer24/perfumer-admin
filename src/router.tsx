import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MyPage from "./MyPage";
import ErrorPage from "./ErrorPage";
import PerfumePage from "./PerfumePage";
import BrandPage from "./BrandPage";

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
