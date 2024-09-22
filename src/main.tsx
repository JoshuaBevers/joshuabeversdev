import * as React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import "./index.css";

import App from "./App";
import ErrorPage from "./errorpage";
import Landing from './pages/landing'
// import LostCitiesLanding from "./pages/games/LostCities/LostCitiesLanding";

const PersonalSiteRouter: RouteObject = {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Landing />
    }
  ]
}

const LostCitiesRouter: RouteObject = {
  element: <App />,

  children: [{
    path: "lost-cities",
    async lazy() {
      const module = await import("./pages/games/LostCities/LostCitiesLanding");
      return { Component: module.default };
    },
    errorElement: <ErrorPage />,
  }
  ]
}

const PersonalProjectsRouter: RouteObject = {
  path: "/projects",
  element: <>tbd</>
}

const router = createBrowserRouter([
  PersonalSiteRouter,
  PersonalProjectsRouter,
  LostCitiesRouter,

]);

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);