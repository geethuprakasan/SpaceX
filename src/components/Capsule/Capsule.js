import React from "react";
import { Card } from "antd";
import { GiApolloCapsule } from "react-icons/gi";

import "./Capsule.css";

const { Meta } = Card;

export default function Capsule({ capsule }) {
  return (
    <Card
      hoverable
      className="capsule-wrap"
      cover={<GiApolloCapsule size={70} />}
    >
      Serial: {capsule?.serial}
      <Meta title={capsule?.type} description={capsule?.last_update || "..."} />
      <div>
        Reused: {capsule?.reuse_count}
        {capsule?.reuse_count === 1 ? " time" : " times"}
      </div>
    </Card>
  );
}
