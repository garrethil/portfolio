import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  ErrorPage,
  HomePage,
  MusicPage,
  PortfolioPage,
} from "./utils/routeLoaders.js";

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center bg-primary px-6 text-center text-content">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-primary-text">
          Loading
        </p>
        <p className="mt-3 text-lg sm:text-xl text-content">
          Preparing the next page.
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<PortfolioPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
);
