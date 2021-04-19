import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h2>kevin&#39;s portfolio</h2>
      <p>
        hey, i'm kevin! 👋 😷 <br />
        software engineer and web developer currently seeking entry-level
        opportunities in NYC, New Jersey, and remote positions <br />
        if you'd like to reach out, you can{" "}
        <a class="mailtoui" href="mailto:kevin.clark93@gmail.com">
          email me at kevin.clark93@gmail.com
        </a>{" "}
        <br />
        you can also check out some of my work below
        <br />
      </p>
      <div>
        <a href="https://docs.google.com/document/d/1jXL2Dp3AsqTthjeNM_speCZ7vte5kLclZF9JUXBnZMQ/edit?usp=sharing">
          resume
        </a>{" "}
        | <a href="https://github.com/kev-kev/">github</a> |{" "}
        <a href="www.linkedin.com/in/kevinclark93">linkedin</a>
      </div>
    </div>
  );
};

export default Header;
