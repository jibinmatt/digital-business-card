import React from "react";
import gmailLogo from "../images/gmailicon.png";
import linkedinLogo from "../images/linkedinlogo.svg";
import twitterLogo from "../images/twittericon.svg";
import fbLogo from "../images/facebookicon.png";
import instagramLogo from "../images/instagramicon.svg";
import githubLogo from "../images/githubicon.png";

export function Email() {
  return (
    <button
      className="email-btn"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open("mailto:jibinjtomas@gmail.com", "_blank");
      }}
    >
      <img src={gmailLogo} alt="email logo" className="gmail-logo" />
      Email
    </button>
  );
}

export function Linkedin() {
  return (
    <button
      className="linkedin-btn"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open(
          "https://www.linkedin.com/in/jibin-james-4438151bb/",
          "_blank"
        );
      }}
    >
      <img src={linkedinLogo} alt="linkedin logo" className="linkedin-logo" />
      Linkedin
    </button>
  );
}

export function Twitter() {
  return (
    <button
      className="twitter-btn"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open("https://twitter.com/jibin_j_", "_blank");
      }}
    >
      <img src={twitterLogo} alt="twitter logo" className="twitter-logo" />
    </button>
  );
}

export function Facebook() {
  return (
    <button
      className="fb-btn"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open("https://www.facebook.com", "_blank");
      }}
    >
      <img src={fbLogo} alt="facebook logo" className="fb-logo" />
    </button>
  );
}

export function Instagram() {
  return (
    <button
      className="instagram-btn"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open("https://www.instagram.com", "_blank");
      }}
    >
      <img
        src={instagramLogo}
        alt="instagram logo"
        className="instagram-logo"
      />
    </button>
  );
}

export function Github() {
  return (
    <button
      className="github-btn"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open("https://github.com/jibinmatt", "_blank");
      }}
    >
      <img src={githubLogo} alt="github logo" className="github-logo" />
    </button>
  );
}
