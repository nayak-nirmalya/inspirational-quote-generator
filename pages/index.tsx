import { useState } from "react";

import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";

import CloudBGImage from "@/components/CloudBGImage";
import Footer from "@/components/Footer";
import HeadMetadata from "@/components/HeadMetadata";
import QuoteGeneratorContainer from "@/components/QuoteGeneratorContainer";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number>(0);

  return (
    <>
      <HeadMetadata />

      <GradientBackgroundCon>
        <QuoteGeneratorContainer />
        <CloudBGImage />
        <Footer numberOfQuotes={numberOfQuotes} />
      </GradientBackgroundCon>
    </>
  );
}
