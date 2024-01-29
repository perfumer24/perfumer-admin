import React from "react";
export const ROUTES = ["App", "SignUp", "Perfume", "Brand", "Accord"];

type LazyRouteType = {
  index: boolean;
  path: string;
  isAuthRequired?: boolean;
  lazyComponent: () => React.LazyExoticComponent<React.ComponentType>;
};

export const routeConfig: {
  [key: string]: LazyRouteType;
} = {
  App: {
    index: true,
    path: "/",
    isAuthRequired: false,
  },
  SignUp: {
    index: false,
    path: "/sign-up",
    isAuthRequired: false,
  },
  Perfume: {
    index: false,
    path: "/perfume",
    isAuthRequired: true,
  },
  Brand: {
    index: false,
    path: "/brand",
    isAuthRequired: true,
  },
  Accord: {
    index: false,
    path: "/accord",
    isAuthRequired: true,
  },
};
