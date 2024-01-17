import Register from "../components/Register";
import Student from "../components/Student";
import Teacher from "../components/Teacher";
import Home from "../pages/home/Home";

// create private router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

// export
export default publicRouter;
