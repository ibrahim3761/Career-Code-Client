import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply";
import PrivateRoute from "../Routes/PrivateRoute";
import MyApplications from "../Pages/MyApllications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

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
          loader: ({params})=> fetch(`https://career-code-server-wine.vercel.app/jobs/${params.id}`)
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
        },
        {
          path: 'addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'myPostedJobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: 'applications/:job_id',
          element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({params})=> fetch(`https://career-code-server-wine.vercel.app/applications/job/${params.job_id}`)
        }
    ],
  },
]);

export default router;
