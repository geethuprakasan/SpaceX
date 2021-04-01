import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.auth);

  return (
    <div className="dashboard-wrap">
      <div className="max-width-1000">
        <div className="welcome-text">
          Welcome to the Space X info web console.
        </div>
        <div className="user-info-text">
          You have logged in as {userInfo.userName}, and you are
          {userInfo.isAdmin ? " an admin." : " a normal user."}
          <div className="user-info-text">
            {userInfo.isAdmin ? (
              <> You have exclusive access to the admin console. </>
            ) : (
              <> You don't have access to the admin console. </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
