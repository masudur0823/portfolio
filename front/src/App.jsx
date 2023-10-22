import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MainLayout from "./component/Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
