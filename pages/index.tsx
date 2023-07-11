import Head from "next/head";
import { useState } from "react";

import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

import Footer from "@/components/Footer";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number>(0);

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta
          name="description"
          content="Generate Random Inspirational Quote & Save as Image."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientBackgroundCon>
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

        <Footer numberOfQuotes={numberOfQuotes} />
      </GradientBackgroundCon>
    </>
  );
}
