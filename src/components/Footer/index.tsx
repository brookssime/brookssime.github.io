import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import ZalgoLink from "../ZalgoLink/ZalgoLink";
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
      <ZalgoLink
        icon={<FaFileAlt />}
        linkName="Resume"
        runs={1}
        download
        href="/resume_latest.pdf"
      />
    </footer>
  );
};

export default Footer;
