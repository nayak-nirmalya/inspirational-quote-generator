import Head from "next/head";
import { useState } from "react";

import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";

import Footer from "@/components/Footer";
import CloudBGImage from "@/components/CloudBGImage";
import HeadMetadata from "@/components/HeadMetadata";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number>(0);

  return (
    <>
      <HeadMetadata />

      <GradientBackgroundCon>
        <CloudBGImage />
        <Footer numberOfQuotes={numberOfQuotes} />
      </GradientBackgroundCon>
    </>
  );
}
