import React from "react";
import ContentCard from "./ContentCard";
import { Content } from "../types/content";

type Props = { pins: Content[]; userId: string };

export default function PinupMap({ pins, userId }: Props) {
  return (
    <div className="pinup-map">
      {pins.map(pin => (
        <div key={pin.id} className="pin" style={{ left: pin.x, top: pin.y }}>
          <ContentCard content={pin} userId={userId} />
        </div>
      ))}
    </div>
  );
}
