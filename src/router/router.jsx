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
import Login from "../OutPages/Login";
import LogoutConfirmation from "../Components/LogoutConfirmation";

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
    path:'/login',
    element:<Login />
  },
  {
    path: "/app",
    element: <App/>,
    children: [
   
      {
        path: "/app/exp",
        element: <AddExpenses/>
      },
      {
        path:"/app/dashboard",
        element:<DashBoard />
      },
       {
         path:'/app/wallet',
         element:<Wallet />
       },
       {
        path:'/app/profile',
         element:<Profile />
       },
       {
         path:'/app/setting',
         element:<Setting />
       },
       {
        path:'/app/logout',
        element:<LogoutConfirmation />
       },
   ]
 },
  
]);

export default router;