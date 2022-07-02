import React from "react";
import profilePic from "../images/profile2.jpg";
import { Email } from "./Buttons";
import { Linkedin } from "./Buttons";

export default function Info() {
  return (
    <div>
      <img
        src={profilePic}
        alt="profile pic of Jibin"
        className="profile-pic"
      />
      <h1 className="my-name">Jibin James</h1>
      <h3 className="my-job">Frontend Developer</h3>
      <p className="website-link">
        <a href="https://github.com/jibinmatt" target="_blank" rel="noreferrer">
          jibin-james.website
        </a>
      </p>

      <div className="btn-div">
        <Email />
        <Linkedin />
      </div>
    </div>
  );
}
