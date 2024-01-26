import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import { ErrorComponent } from "./utils/ErrorComponent";
import { ROUTES, routeConfig } from "./utils/ROUTES";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import React from "react";

const LazyRoutes = ROUTES.map((route) => {
  const { index, path, isAuthRequired } = routeConfig[route] || {
    index: false,
    path: route.toLowerCase(),
    isAuthRequired: false,
  };
  const LazyComponent = React.lazy(() => import(`./pages/${route}Page.tsx`));

  const RouteComponent = isAuthRequired ? PrivateRoute : PublicRoute;
  console.log(route, isAuthRequired, path);
  console.log(LazyComponent);

  return (
    <Route
      key={route}
      index={index}
      path={path}
      element={
        <RouteComponent
          isAuthRequired={isAuthRequired}
          LazyComponent={LazyComponent}
        />
      }
    />
  );
});

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />} errorElement={<ErrorComponent />}>
      {LazyRoutes}
    </Route>,
  ),
);
