import * as React from "react";

import { zalgoify } from "../utils/zalgo";
interface ZalgoLinkProps {
  linkName: string;
  href?: string;
  runs: number;
  target?: string;
  icon?: React.ReactElement;
}
const ZalgoLink = ({ linkName, runs, href, target, icon }: ZalgoLinkProps) => {
  const [name, setName] = React.useState(linkName);
  return (
    <a
      onMouseEnter={() => setName(zalgoify(name, runs))}
      onMouseLeave={() => setName(linkName)}
      href={href || "#"}
      target={target}
    >
      {icon} {name}
    </a>
  );
};

export default ZalgoLink;
