import * as React from "react";
import Card from "../Card";
import "./body.css";
import headshot from "../../images/headshot.jpg";
import ZalgoLink from "../ZalgoLink";

const Body = () => {
  return (
    <main className="body">
      <Card id="about" src={headshot} imgHeight={300}>
        <>
          <p>
            I'm a software engineer at{" "}
            <ZalgoLink
              linkName="ChartHop"
              runs={1}
              target="_blank"
              href="https://www.charthop.com"
            />
            .
          </p>
          <p>
            Previously, I founded Gather, a project management app for People
            Ops.
          </p>
          <p>
            Before that, I was a{" "}
            <ZalgoLink
              linkName="Venture for America"
              runs={1}
              target="_blank"
              href="https://ventureforamerica.org"
            />{" "}
            fellow in New Orleans.
          </p>
        </>
      </Card>
    </main>
  );
};

export default Body;
