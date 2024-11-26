import React from "react";
import { RiveComponent } from "@rive-app/react-canvas";

const RiveAnimation = () => {
  return (
    <div className="rive-container">
      <RiveComponent src="/teapot_dance.riv" />
    </div>
  );
};

export default RiveAnimation;