import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import { LayoutProvider } from "./context/LayoutProvider";
import Error from "./pages/Error";
import Home from "./pages/Home";

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
