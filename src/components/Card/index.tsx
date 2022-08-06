import * as React from "react";
import Image from "../Image";
import TextBlock from "../TextBlock";
import "./card.css";

interface CardProps {
  id: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  imgHeight?: number;
  imgWidth?: number;
}

const Card = (props: CardProps) => {
  return (
    <section className="card" id={props.id}>
      {props.src && (
        <Image
          src={props.src}
          alt={props.alt || ""}
          grayscale={1}
          height={props.imgHeight}
          width={props.imgWidth}
        />
      )}
      <TextBlock children={props.children}></TextBlock>
    </section>
  );
};

export default Card;
