import * as React from "react";

interface TextBlockProps {
  children?: React.ReactNode;
}

const textBlockStyle = {
  minWidth: 200,
};
const TextBlock = (props: TextBlockProps) => {
  return <div style={textBlockStyle}>{props.children}</div>;
};

export default TextBlock;
