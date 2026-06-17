import {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { zalgoify } from "../../utils/zalgo";

interface ZalgoLinkProps {
  linkName: string;
  href?: string;
  runs: number;
  target?: string;
  icon?: ReactElement;
  download?: boolean;
}

const ZalgoLink = ({
  linkName,
  runs,
  href,
  target,
  icon,
  download = false,
}: ZalgoLinkProps) => {
  const [name, setName] = useState(linkName);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const addHoverState = useCallback(() => {
    setName(zalgoify(name, runs));
  }, [name, runs]);

  const removeHoverState = useCallback(() => {
    setName(linkName);
  }, [linkName]);

  useEffect(() => {
    linkRef.current?.addEventListener("mouseenter", addHoverState);
    linkRef.current?.addEventListener("mouseleave", removeHoverState);

    return () => {
      linkRef.current?.removeEventListener("mouseenter", addHoverState);
      linkRef.current?.removeEventListener("mouseleave", removeHoverState);
    };
  }, [addHoverState, removeHoverState]);

  return (
    <a ref={linkRef} href={href || "#"} target={target} download={download}>
      {icon} {name}
    </a>
  );
};

export default ZalgoLink;
