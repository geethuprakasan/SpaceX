import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllRockets } from "../utils/api";
import Rocket from "../components/Rocket/Rocket";

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.spaceX.rockets);

  const populateRockets = async () => {
    const rockets = await getAllRockets();
    dispatch({
      type: "ADD_ROCKETS",
      rockets: rockets?.data || [],
    });
  };
  useEffect(() => {
    if (!rockets) {
      populateRockets();
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {(rockets || []).map((rocket) => (
        <Rocket rocket={rocket} />
      ))}
    </div>
  );
}
