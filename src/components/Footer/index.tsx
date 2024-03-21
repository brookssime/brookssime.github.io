import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ZalgoLink from "../ZalgoLink";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <ZalgoLink
        icon={<FaGithub />}
        linkName="Github"
        runs={1}
        target="_blank"
        href="https://www.github.com/brookssime"
      />
      <ZalgoLink
        icon={<FaLinkedin />}
        linkName="LinkedIn"
        runs={1}
        target="_blank"
        href="https://www.linkedin.com/in/brookssime"
      />
    </footer>
  );
};

export default Footer;
