import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <section>
        <h5 style={{ marginTop: " 50px" }}>
          © 2023 Products, Inc. All Rights Reserved
        </h5>
      </section>
      <section className="secondSection">
        <a href="https://github.com/vranicmitar?tab=repositories">
          <GitHubIcon style={{ color: "white", fontSize: " 50px" }} />{" "}
        </a>
        <a href="https://www.linkedin.com/in/mitar-vranic-8585a525a/">
          <LinkedInIcon style={{ color: "white", fontSize: " 50px" }} />
        </a>
      </section>
    </div>
  );
};

export default Footer;
