import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply";
import PrivateRoute from "../Routes/PrivateRoute";
import MyApplications from "../Pages/MyApllications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path:"register",
            Component:Register
        },
        {
            path:"signIn",
            Component: SignIn
        },
        {
          path:'job-details/:id',
          Component: JobDetails,
          loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'jobApply/:id',
          element: <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        },
        {
          path: 'myApllications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        }
    ],
  },
]);

export default router;
