import React from "react";
import {
  BackgroundImage1,
  BackgroundImage2,
} from "./QuoteGenerator/QuoteGeneratorElements";

export default function CloudBGImage() {
  return (
    <>
      <BackgroundImage1
        src="/assets/cloud-and-thunder.png"
        height="300"
        width="300"
        alt="Cloud-and-Thunder"
      />
      <BackgroundImage2
        src="/assets/cloudy-weather.png"
        height="300"
        width="600"
        alt="Cloud-and-Thunder"
      />
    </>
  );
}
