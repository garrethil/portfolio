import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Music from "./pages/Music.jsx";
import Error from "./pages/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="music" element={<Music />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </HashRouter>
);
