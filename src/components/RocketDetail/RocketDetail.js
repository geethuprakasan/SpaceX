import { Card } from "antd";
import React from "react";
import "./RocketDetail.css";

export default function RocketDetail({ rocket }) {
  if (!rocket) {
    return <div className="rocket-detail-wrap">Invalid Rocket ID</div>;
  }
  return (
    <div className="rocket-detail-wrap">
      <Card>
        {rocket?.flickr_images?.length && (
          <div>
            <img width="750px" alt="rocket" src={rocket?.flickr_images?.[0]} />
          </div>
        )}
        <div className="rocket-detail-name">
          {rocket?.name} ({rocket?.type})
        </div>
        <div> Country : {rocket?.country}</div>
        <div> Company : {rocket?.company}</div>
        <div> Weight : {rocket?.mass?.kg} kg</div>
        <div> Height : {rocket?.height?.meters} meters</div>
        <div> Description : {rocket?.description}</div>
      </Card>
    </div>
  );
}
