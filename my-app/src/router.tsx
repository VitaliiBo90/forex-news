import Root from "./routes/root";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);