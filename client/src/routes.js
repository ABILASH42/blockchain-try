import Dashboard from "./views/Dashboard";
import BuyerProfile from "./views/buyerProfile";
import ViewImage from "./views/viewImage";
import OwnedLands from "./views/OwnedLands";
import MakePayment from "./views/MakePayment";
import UpdateBuyer from "./views/updateBuyer";
import Help from "./pages/Help";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/buyer-profile",
    name: "Buyer Profile",
    rtlName: "الرموز",
    icon: "tim-icons icon-single-02",
    component: BuyerProfile,
    layout: "/admin",
  },
  {
    path: "/view-image",
    name: "Land Gallery",
    rtlName: "الرموز",
    icon: "tim-icons icon-image-02",
    component: ViewImage,
    layout: "/admin",
  },
  {
    path: "/owned-lands",
    name: "Owned Lands",
    rtlName: "الرموز",
    icon: "tim-icons icon-bank",
    component: OwnedLands,
    layout: "/admin",
  },
  {
    path: "/make-payment",
    name: "Make Payment",
    rtlName: "الرموز",
    icon: "tim-icons icon-money-coins",
    component: MakePayment,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    rtlName: "الرموز",
    icon: "tim-icons icon-support-17",
    component: Help,
    layout: "/admin",
  },
  {
    path: "/update-buyer",
    name: "",
    rtlName: "الرموز",
    icon: "tim-icons",
    component: UpdateBuyer,
    layout: "/admin",
  },
];

export default routes;