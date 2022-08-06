import * as React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

import "./global.css";

const IndexPage = () => {
  return (
    <div className="pages">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export const Head = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <title>Brooks Sime</title>
      <meta name="description" content={`Brooks Sime | ${currentYear}`} />
    </>
  );
};

export default IndexPage;
