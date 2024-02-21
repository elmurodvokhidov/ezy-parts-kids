import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import MainLayout from "./layout/MainLayout";
import Product from "./pages/product/Product";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: "e428164a-5d50-4e7d-91c4-598d809ad2c9",
      title: "Product1",
      category: "CategoryA",
    },
    {
      id: "f434749e-0648-49f6-b277-96f33dd86b90",
      title: "Product2",
      category: "CategoryB",
    },
    {
      id: "f95ac7c3-1917-4560-b73b-def1fe7886fa",
      title: "Product3",
      category: "CategoryC",
    },
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "category",
          element: <Category products={products} setProducts={setProducts} />
        },
        {
          path: ":id",
          element: <Product products={products} setProducts={setProducts} />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App