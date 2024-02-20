import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import AddExpenses from "../Pages/AddExpenses";
import DashBoard from "../Pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/add",
        element: <AddExpenses/>
      },
      {
        path:"/exp",
        element:<DashBoard />
      }
    ]
  },
]);

export default router;