import * as React from "react";

import ZalgoLink from "../ZalgoLink";
import Tab from "../Tab";

import "./header.css";

const tabs: { href: string; name: string; hideSeparator?: boolean }[] = [];

const Header = () => {
  return (
    <header className="header">
      <h1>
        <ZalgoLink linkName="BROOKS SIME" runs={2}></ZalgoLink>
      </h1>
      <div className="tabs">
        {tabs.map((tab) => (
          <Tab key={tab.name} {...tab} />
        ))}
      </div>
    </header>
  );
};

export default Header;
