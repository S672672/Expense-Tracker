import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import AddExpenses from "../Pages/AddExpenses";
import DashBoard from "../Pages/DashBoard";
import Wallet from "../Pages/Wallet";
import Profile from "../Pages/Profile";
import Setting from '../Pages/Setting';
import HomePage from "../HomePage";
import LandingPage from "../OutPages/LandingPage";
import SignUp from "../OutPages/SignUp";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage />,
  },
  {
    path:'/signup',
    element:<SignUp />
  },
  {
    path: "/app",
    element: <App/>,
    children: [
   
      {
        path: "exp",
        element: <AddExpenses/>
      },
      {
        path:"dashboard",
        element:<DashBoard />
      },
       {
         path:'wallet',
         element:<Wallet />
       },
       {
        path:'profile',
         element:<Profile />
       },
       {
         path:'setting',
         element:<Setting />
       }
   ]
 },
  
]);

export default router;