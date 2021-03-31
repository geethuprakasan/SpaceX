import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./NavBar.css";

export default function NavBar() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return (
    <div className="nav-wrap">
      <div className="nav-container">
        <div style={{ fontWeight: 600 }}>
          Hi {`${user.userName}, ${user.isAdmin ? " (Admin)" : ""}`}
        </div>
        <Menu
          mode="horizontal"
          style={{ cursor: "pointer" }}
          onClick={handleMenuClick}
        >
          <Menu.Item key="dashboard">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="rocket">
            <Link to="/rockets">Rockets</Link>
          </Menu.Item>

          <Menu.Item key="capsules">
            <Link to="/capsules">Capsules</Link>
          </Menu.Item>
          {user.isAdmin && (
            <Menu.Item key="admin">
              <Link to="/admin">Admin Console</Link>
            </Menu.Item>
          )}
          <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
