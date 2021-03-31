import React from "react";
import { Card } from "antd";
import "./Rocket.css";

const { Meta } = Card;

export default function Rocket({ rocket }) {
  return (
    <Card
      hoverable
      className="rocket-wrap"
      cover={<img alt="rocket" src={rocket?.flickr_images?.[0]} />}
    >
      <Meta title={rocket?.name} description={rocket?.description} />
    </Card>
  );
}
