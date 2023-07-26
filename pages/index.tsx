import { useEffect, useState } from "react";

import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";

import CloudBGImage from "@/components/CloudBGImage";
import Footer from "@/components/Footer";
import HeadMetadata from "@/components/HeadMetadata";
import QuoteGeneratorContainer from "@/components/QuoteGeneratorContainer";

import { quotesQueryName } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";

function isGraphQLResultForquotesQueryName(
  response: any
): response is GraphQLResult<{
  quotesQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  return (
    response.data &&
    response.data.quotesQueryName &&
    response.data.quotesQueryName.items
  );
}

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number>(0);

  const updateQuoteInfo = async () => {
    try {
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quotesQueryName,
        authMode: "AWS_IAM",
        variables: {
          queryName: "LIVE",
        },
      });

      if (!isGraphQLResultForquotesQueryName(response)) {
        throw new Error("Unexpected response from API.graphql");
      }

      if (!response.data) {
        throw new Error("Response data is undefined");
      }

      const receivedNumberOfQuotes =
        response.data.quotesQueryName.items[0].quotesGenerated;

      setNumberOfQuotes(receivedNumberOfQuotes);
    } catch (error) {
      console.error("Error Getting Quotes Data", error);
    }
  };

  useEffect(() => {
    updateQuoteInfo();
  }, []);

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
