import * as React from "react";
import "./image.css";

interface ImageProps {
  alt: string;
  src: string;
  grayscale?: number;
  height?: number;
  width?: number;
}

const grayscale = (grayscale?: number) => {
  return { filter: `grayscale(${grayscale || 0})` };
};

const Image = (props: ImageProps) => {
  return (
    <img
      className="image"
      style={grayscale(props.grayscale)}
      src={props.src}
      alt={props.alt}
      height={props.height || 200}
      width={props.width || 200}
    />
  );
};

export default Image;
