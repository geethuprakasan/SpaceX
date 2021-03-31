import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      dispatch({ type: "LOGOUT" });
      history.push("/");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #e6e6e6",
        padding: "0 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
