import Card from "../Card";
import "./body.css";
import headshot from "../../images/headshot.jpg";
import ZalgoLink from "../ZalgoLink/ZalgoLink";

const Body = () => {
  return (
    <main className="body">
      <Card id="about" src={headshot.src} imgHeight={300}>
        <p>I'm a freelance software engineer.</p>
        <p>
          Previously, I founded{" "}
          <ZalgoLink
            linkName="Gather"
            runs={1}
            target="_blank"
            href="https://www.ycombinator.com/companies/gather"
          />
          , a project management app for People Ops.
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
      </Card>
    </main>
  );
};

export default Body;
