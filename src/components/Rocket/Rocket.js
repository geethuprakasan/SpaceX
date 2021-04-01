import React from "react";
import { Button, Card } from "antd";
import "./Rocket.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function Rocket({ rocket }) {
  return (
    <Card
      hoverable
      className="rocket-wrap"
      cover={
        rocket?.flickr_images?.length && (
          <img alt="rocket" src={rocket?.flickr_images?.[0]} />
        )
      }
      actions={[
        <Link to={`/rocket/${rocket.id}`}>
          <Button type="primary">More Info</Button>
        </Link>,
      ]}
    >
      <Meta title={rocket?.name} description={rocket?.description} />
    </Card>
  );
}
