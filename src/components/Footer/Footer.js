import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TextField } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <h5>© 2023 Products, Inc. All Rights Reserved</h5>
      </section>
      <section className="first">
        <TextField
          label="Enter your email"
          type={"email"}
          sx={{
            width: { sm: 200, md: 300 },
            "& .MuiInputBase-root": {
              height: 50,
            },
          }}
        />
        <button>
          <h5>Newsletter subscription</h5>
        </button>
      </section>
      <section className="secondSection">
        <a href="https://github.com/vranicmitar?tab=repositories">
          <GitHubIcon
            style={{
              color: "white",
              fontSize: " 50px",
            }}
            className="icon"
          />{" "}
        </a>
        <a href="https://www.linkedin.com/in/mitar-vranic-8585a525a/">
          <LinkedInIcon
            style={{ color: "white", fontSize: " 50px" }}
            className="icon"
          />
        </a>
      </section>
    </div>
  );
};

export default Footer;
