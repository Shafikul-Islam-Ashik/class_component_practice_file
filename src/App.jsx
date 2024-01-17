// import { RouterProvider } from "react-router-dom";
import "./App.css";
// import router from "./router/router";
// import { ToastContainer } from "react-toastify";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Teacher title="Functional component" />
      <Student title="Class component" />
      <Register />

      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}

      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
