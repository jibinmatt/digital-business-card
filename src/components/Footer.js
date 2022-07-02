import React from "react";
import { Twitter } from "./Buttons";
import { Facebook } from "./Buttons";
import { Instagram } from "./Buttons";
import { Github } from "./Buttons";

export default function Footer() {
  return (
    <div className="footer-div">
      <Twitter />
      <Facebook />
      <Instagram />
      <Github />
    </div>
  );
}
