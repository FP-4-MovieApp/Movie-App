import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/root-layout";
import Home from "../pages/home";
import Search from "../pages/search";
import Detail from "../pages/detail";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
];

const routesWithRootLayout = routes.map((item) => ({
  path: item.path,
  element: <RootLayout>{item.element}</RootLayout>,
}));

export const router = createBrowserRouter([...routesWithRootLayout]);
