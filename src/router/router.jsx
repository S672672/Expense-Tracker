import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import AddExpenses from "../Pages/AddExpenses";
import DashBoard from "../Pages/DashBoard";
import Wallet from "../Pages/Wallet";
import Profile from "../Pages/Profile";
import Setting from '../Pages/Setting';
import HomePage from "../HomePage";
import LandingPage from "../OutPages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    children: [
      {
        path:'/app',
        element:<App />,
      },
      {
        path: "/exp",
        element: <AddExpenses/>
      },
      {
        path:"/dashboard",
        element:<DashBoard />
      },
       {
         path:'/wallet',
         element:<Wallet />
       },
       {
        path:'/profile',
         element:<Profile />
       },
       {
         path:'/setting',
         element:<Setting />
       }
    ]
  },
]);

export default router;