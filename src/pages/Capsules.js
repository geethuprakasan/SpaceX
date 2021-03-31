import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCapsules } from "../utils/api";
import Capsule from "../components/Capsule/Capsule";

export default function Capsules() {
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state.spaceX.capsules);

  const populateCapsules = async () => {
    const capsules = await getAllCapsules();
    dispatch({
      type: "ADD_CAPSULES",
      capsules: capsules?.data || [],
    });
  };

  useEffect(() => {
    if (!capsules) {
      populateCapsules();
    }
  }, []);

  return (
    <div className="capsule-page-wrap">
      {(capsules || []).map((capsule) => (
        <Capsule capsule={capsule} />
      ))}
    </div>
  );
}
