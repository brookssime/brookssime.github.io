import * as React from "react";
import "./tab.css";

interface TabProps {
  href: string;
  name: string;
  hideSeparator?: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <>
      <div className="tab">
        <a href={props.href}>{props.name}</a>
      </div>
      {!props.hideSeparator && <div>|</div>}
    </>
  );
};

export default Tab;
