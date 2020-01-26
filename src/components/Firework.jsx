import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../firework.json";

function Firework() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
}

export default Firework;
