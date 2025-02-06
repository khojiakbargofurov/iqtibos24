import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Iqtiboslar from "./pages/Iqtiboslar";
import Create from "./pages/Create";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Iqtibos from "./pages/Iqtibos";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/iqtiboslar",
          element: <Iqtiboslar/>,
        },
        {
          path: "/create",
          element: <Create/>,
        },
        {
          path: "/books",
          element: <Books/>,
        },
        {
          path: "/books/:id",
          element: <Book/>,
        },
        {
          path: "/iqtiboslar/:id",
          element: <Iqtibos/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App
