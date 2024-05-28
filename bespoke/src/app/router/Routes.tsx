import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/Catalog/Catalog";
//import ProductDetails from '../../features/Catalog/ProductDetails';
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
// import Registerform from "../../features/auth/registerpage";
// import Measurementguide from '../../features/measurements/Measureguidepage';
import MensCatagory from "../../features/Catalog/MensCatagory";
import Fullsuit from "../../features/Catalog/catagoryforms/Fullsuit";
import Blazers from "../../features/Catalog/catagoryforms/Blazers";
import Shirt from "../../features/Catalog/catagoryforms/Shirt";
import Trouser from "../../features/Catalog/catagoryforms/Trouser";
import Safari from "../../features/Catalog/catagoryforms/Safari";
import Tuxedo from "../../features/Catalog/catagoryforms/tuxedo";
import Alteration from "../../features/Alteration/alteration";
import MensAlteration from "../../features/Alteration/MensAlteration";
import Fullsuitalter from "../../features/Alteration/alterationforms/suitmeasure";
import Blazeralterform from "../../features/Alteration/alterationforms/blazeralterform";
import Shirtalterform from "../../features/Alteration/alterationforms/shirtalterform";
import Trouseralterform from "../../features/Alteration/alterationforms/trouseralterform";
// import Dashboard from "../../admin/Dashboard"; AdminProtectedRoute";
import Userlist from "../../admin/Userlist";
import Orderlist from "../../admin/orderlist";
import Customermeasurments from "../../admin/ordermanagement";
import Editcustomerdata from "../../admin/Editmeasurements";
import Updatecharges from "../../admin/updatecharges";
import Customerprofile from "../../admin/editprofile";
import Gallery from "../../admin/gallery";
import AddFabric from "../../admin/addFabric";
import Profile from "../../admin/userProfile";
import Updateitems from "../../admin/updateitems";
import Editorder from "../../admin/editorder";
import Homegallery from "../../features/home/homegallery";
import OrderConfirm from "../../features/checkout/orderConfirm";
import Loginform from "../../features/auth/loginpage";
import AdminProtectedRoute from "../../admin/AdminProtectedRoute";
import Dashboard from "../../admin/Dashboard";
import OrderDetails from "../../admin/orderDetails";
import Termsncontitions from "../../features/home/terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "catalog",
        element: <Catalog />,
        children: [
          { index: true, element: <MensCatagory /> },
          { path: "fullsuit", element: <Fullsuit /> },
          { path: "tuxedo", element: <Tuxedo /> },
          { path: "blazers", element: <Blazers /> },
          { path: "safari", element: <Safari /> },
          { path: "shirts", element: <Shirt /> },
          { path: "trousers", element: <Trouser /> },
          {
            path: "dashboard",
            element: (
              <AdminProtectedRoute>
                <Dashboard />
              </AdminProtectedRoute>
            ),
          },
          // { path: "Dashboard", element: <Dashboard /> },
          { path: "userlist", element: <Userlist /> },
          { path: "orderlist", element: <Orderlist /> },
          { path: "orderdetails/:orderId", element: <OrderDetails /> },
          { path: "orderedit", element: <Customermeasurments /> },
          { path: "editcustomer", element: <Editcustomerdata /> },
          { path: "updatecharges", element: <Updatecharges /> },
          { path: "addprofile", element: <Customerprofile /> },
          { path: "gallery", element: <Gallery /> },
          { path: "addfabric", element: <AddFabric /> },
          { path: "profile", element: <Profile /> },
          { path: "updateitems", element: <Updateitems /> },
          { path: "editorder", element: <Editorder /> },
        ],
      },
      {
        path: "alteration",
        element: <Alteration />,
        children: [
          { index: true, element: <MensAlteration /> },
          { path: "altersuit", element: <Fullsuitalter /> },
          { path: "alterblazer", element: <Blazeralterform /> },
          { path: "altershirt", element: <Shirtalterform /> },
          { path: "altertrouser", element: <Trouseralterform /> },
        ],
      },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      // { path: "login", element: <Loginform /> },
      // { path: "register", element: <Registerform /> },
      { path: "homegallery", element: <Homegallery /> },
      { path: "orderConfirm/:orderId", element: <OrderConfirm /> },
      { path: "termsandconditions", element: <Termsncontitions /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
      {
        path: "admin",
        element: <Loginform />,
        children: [
          // {
          //   path: "/admin/dashboard",
          //   element: (
          //     <AdminProtectedRoute>
          //       <Dashboard />
          //     </AdminProtectedRoute>
          //   ),
          // },
        ],
      },
    ],
  },
]);
