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
      console.log("response", response);
    } catch (error) {
      console.log("error getting quote data", error);
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
