import React from "react";
import {
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "./QuoteGenerator/QuoteGeneratorElements";

export default function QuoteGeneratorContainer() {
  return (
    <QuoteGeneratorCon>
      <QuoteGeneratorInnerCon>
        <QuoteGeneratorTitle>
          Daily Inspirational Quote Generator
        </QuoteGeneratorTitle>

        <QuoteGeneratorSubTitle>
          Looking for a splash of inspiration? Generate a quote card with a
          random inspirational quote provided by{" "}
          <FooterLink
            href="https://zenquotes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZenQuotes API
          </FooterLink>
          .
        </QuoteGeneratorSubTitle>

        <GenerateQuoteButton onClick={() => {}}>
          <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
        </GenerateQuoteButton>
      </QuoteGeneratorInnerCon>
    </QuoteGeneratorCon>
  );
}
