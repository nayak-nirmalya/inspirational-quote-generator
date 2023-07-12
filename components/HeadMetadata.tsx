import React from "react";
import Head from "next/head";

export default function HeadMetadata() {
  return (
    <Head>
      <title>Inspirational Quote Generator</title>
      <meta
        name="description"
        content="Generate Random Inspirational Quote & Save as Image."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
