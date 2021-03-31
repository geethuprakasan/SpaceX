import logo from "./logo.svg";
import "./App.css";
import Rockets from "./pages/Rockets";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Capsules from "./pages/Capsules";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Admin from "./pages/Admin";
import routeMap from "./utils/routeMap";
function App() {
  const { loggedIn, isAdmin } = useSelector((state) => state.auth);
  if (!loggedIn) {
    return <Login />;
  }
  let routes = [...routeMap.userRoute];
  if (isAdmin) {
    routes = [...routes, ...routeMap.adminRoute];
  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
