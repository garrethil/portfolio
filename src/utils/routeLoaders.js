import { lazy } from "react";

export const loadHomePage = () => import("../pages/Home.jsx");
export const loadPortfolioPage = () => import("../pages/Portfolio.jsx");
export const loadMusicPage = () => import("../pages/Music.jsx");
export const loadErrorPage = () => import("../pages/Error.jsx");

export const HomePage = lazy(loadHomePage);
export const PortfolioPage = lazy(loadPortfolioPage);
export const MusicPage = lazy(loadMusicPage);
export const ErrorPage = lazy(loadErrorPage);

const routePreloaders = {
  "/": loadHomePage,
  "/projects": loadPortfolioPage,
  "/music": loadMusicPage,
  "*": loadErrorPage,
};

export function preloadRoute(path) {
  const preload = routePreloaders[path];

  if (preload) {
    preload();
  }
}