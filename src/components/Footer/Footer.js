import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="http://www.linkedin.com/in/" target="__blank">
         Monoj Kumar Das
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/" target="__blank">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="http://www.linkedin.com/in/" target="__blank">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/monojmkd" target="__blank">
          <LinkIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
