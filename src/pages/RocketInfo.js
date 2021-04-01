import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RocketDetail from "../components/RocketDetail/RocketDetail";
import { getRocketInfo } from "../utils/api";

export default function RocketInfo() {
  let { rocketId } = useParams();
  const rockets = useSelector((state) => state.spaceX.rockets);
  const [rocket, setRocket] = useState(null);

  let currentRocket = (rockets || []).find((rocket) => rocket.id === rocketId);

  const fetchRockets = async () => {
    try {
      const resp = await getRocketInfo(rocketId);
      setRocket(resp?.data);
    } catch {
      setRocket(null);
    }
  };

  useEffect(() => {
    if (!currentRocket) {
      fetchRockets();
    } else {
      setRocket(currentRocket);
    }
  }, [currentRocket]);

  return <RocketDetail rocket={rocket} />;
}
