import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Reservations from "../pages/Reservations.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "reservations",
    element: <Reservations/>
  },
]);
