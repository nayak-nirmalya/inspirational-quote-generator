import Head from "next/head";
import { useState } from "react";

import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";

import Footer from "@/components/Footer";
import CloudBGImage from "@/components/CloudBGImage";

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
        <CloudBGImage />

        <Footer numberOfQuotes={numberOfQuotes} />
      </GradientBackgroundCon>
    </>
  );
}
