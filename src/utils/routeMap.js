import Admin from "../pages/Admin";
import Capsules from "../pages/Capsules";
import Dashboard from "../pages/Dashboard";
import Rockets from "../pages/Rockets";

const routeMap = {
  userRoute: [
    {
      exact: true,
      path: "/",
      component: Dashboard,
    },
    {
      exact: true,
      path: "/rockets",
      component: Rockets,
    },
    {
      exact: true,
      path: "/capsules",
      component: Capsules,
    },
  ],
  adminRoute: [
    {
      exact: true,
      path: "/admin",
      component: Admin,
    },
  ],
};

export default routeMap;
