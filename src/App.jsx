import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

// pages
import MainLayOut from "./MainLayOut";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./Pages/Contact";
import Shop from "./pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="*" element={<h1>Page Unavailable</h1>} />
    </Route>
  )
);

const App = () => {
  return (
    <ProductProvider>
      <RouterProvider router={router} />;
    </ProductProvider>
  );
};

export default App;
