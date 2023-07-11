import React from "react";
import {
  FooterCon,
  RedSpan,
  FooterLink,
} from "./QuoteGenerator/QuoteGeneratorElements";

export default function Footer({ numberOfQuotes }: { numberOfQuotes: Number }) {
  return (
    <FooterCon>
      <>
        Quotes Generated: {numberOfQuotes}
        <br />
        Developed with <RedSpan>❤️</RedSpan> by{" "}
        <FooterLink
          href="https://portfolio-nayak-nirmalya.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Nirmalya Nayak
        </FooterLink>
      </>
    </FooterCon>
  );
}
