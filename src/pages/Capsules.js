import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCapsules } from "../utils/api";
import Capsule from "../components/Capsule/Capsule";

export default function Capsules() {
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state.spaceX.capsules);

  useEffect(async () => {
    debugger;
    if (!capsules) {
      const capsules = await getAllCapsules();
      debugger;
      dispatch({
        type: "ADD_CAPSULES",
        capsules: capsules?.data || [],
      });
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
      {(capsules || []).map((capsule) => (
        <Capsule capsule={capsule} />
      ))}
    </div>
  );
}
