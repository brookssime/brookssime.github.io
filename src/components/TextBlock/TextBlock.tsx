import type { ReactNode } from "react";

interface TextBlockProps {
  children?: ReactNode;
}

const textBlockStyle = {
  minWidth: 200,
};
const TextBlock = (props: TextBlockProps) => {
  return <div style={textBlockStyle}>{props.children}</div>;
};

export default TextBlock;
