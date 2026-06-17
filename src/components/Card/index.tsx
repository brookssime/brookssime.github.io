import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "../Image";
import TextBlock from "../TextBlock/TextBlock";
import "./card.css";

interface CardProps {
  id: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
  imgHeight?: number;
  imgWidth?: number;
}

const Card = (props: CardProps) => {
  const [grayScale, setGrayScale] = useState(1);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const addHoverState = useCallback(() => {
    setGrayScale(0);
  }, []);

  const removeHoverState = useCallback(() => {
    setGrayScale(1);
  }, []);

  useEffect(() => {
    imageRef.current?.addEventListener("mouseenter", addHoverState);
    imageRef.current?.addEventListener("mouseleave", removeHoverState);

    return () => {
      imageRef.current?.removeEventListener("mouseenter", addHoverState);
      imageRef.current?.removeEventListener("mouseleave", removeHoverState);
    };
  }, [addHoverState, removeHoverState]);

  return (
    <section className="card" id={props.id}>
      {props.src && (
        <div ref={imageRef}>
          <Image
            src={props.src}
            alt={props.alt || ""}
            grayscale={grayScale}
            height={props.imgHeight}
            width={props.imgWidth}
          />
        </div>
      )}
      <TextBlock>{props.children}</TextBlock>
    </section>
  );
};

export default Card;
