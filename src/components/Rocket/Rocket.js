import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function Rocket({ rocket }) {
  return (
    <Card
      hoverable
      style={{ width: 240, marginTop: "15px" }}
      cover={<img alt="rocket-image" src={rocket?.flickr_images?.[0]} />}
    >
      <Meta title={rocket?.name} description={rocket?.description} />
    </Card>
  );
}
