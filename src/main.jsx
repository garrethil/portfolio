import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
