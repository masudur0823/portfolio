import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MainLayout from "./component/Layout/MainLayout";
import { LayoutProvider } from "./context/LayoutProvider";

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
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  );
}

export default App;
