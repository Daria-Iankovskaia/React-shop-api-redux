import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Layout, loader as categoriesLoader } from "./components/header/Layout";
import { Electronics, loader as electronicsLoader } from "./components/pages/electronics/Electronics";
import { ElectronicSingleProduct, loader as singleProductLoader } from "./components/pages/electronicSingleProduct/ElectronicSingleProduct";
import { Jewelery, loader as jeweleryLoader } from "./components/pages/jewelery/Jewelery";
import { JewelerySingleProduct, loader as singleJeweleryProductLoader } from "./components/pages/jewelerySingleProduct/JewelerySingleProduct";
import { Men, loader as menProductsLoader } from "./components/pages/men/Men";
import { MenSingleProduct, loader as singleMenProductLoader } from "./components/pages/menSingleProduct/MenSingleProduct";
import { Women, loader as womenProductsLoader } from "./components/pages/women/Women";
import { WomenSingleProduct, loader as singleWomenProductLoader } from "./components/pages/womenSingleProduct/WomenSingleProduct";
import Basket from "./components/basket/Basket";
import { CheckoutPage } from "./components/checkout/CheckoutPage";
import { Error } from "./components/error/Error";
import { Login } from "./components/pages/login/Login";
import "./global.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: categoriesLoader,
      children: [
        { index: true, element: <Electronics />, loader: electronicsLoader, errorElement: <Error /> },
        { path: "electronicproduct/:id", element: <ElectronicSingleProduct />, loader: singleProductLoader, errorElement: <Error /> },
        { path: "jewelery", element: <Jewelery />, loader: jeweleryLoader, errorElement: <Error /> },
        { path: "jewelery/jeweleryproduct/:id", element: <JewelerySingleProduct />, loader: singleJeweleryProductLoader, errorElement: <Error /> },
        { path: "men-clothing", element: <Men />, loader: menProductsLoader, errorElement: <Error /> },
        { path: "men-clothing/menproduct/:id", element: <MenSingleProduct />, loader: singleMenProductLoader, errorElement: <Error /> },
        { path: "women-clothing", element: <Women />, loader: womenProductsLoader, errorElement: <Error /> },
        { path: "women-clothing/womenproduct/:id", element: <WomenSingleProduct />, loader: singleWomenProductLoader, errorElement: <Error /> },
        { path: "login", element: <Login /> },
        { path: "basket", element: <Basket /> },
        { path: "checkout", element: <CheckoutPage /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

