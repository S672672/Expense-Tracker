import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import AddExpenses from "../Pages/AddExpenses";
import DashBoard from "../Pages/DashBoard";
import HomePage from "../HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/exp",
        element: <AddExpenses/>
      },
      {
        path:"/dashboard",
        element:<DashBoard />
      },
      // {
      //   path:'/wallet',
      //   element:<Wallet />
      // },
      // {
      //   path:'/profile',
      //   element:<Profile />
      // },
      // {
      //   path:'/setting',
      //   element:<Setting />
      // }
    ]
  },
]);

export default router;