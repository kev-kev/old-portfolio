import React from "react";

const Header = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>kevin&#39;s portfolio</h2>
      <p>
        hey 👋, i'm kevin! <br />
        software engineer and web developer curretly seeking entry-level
        opportunities <br />
        you can check out some of my projects below. drop me an email if you
        have any questions, yo! <br />
        kevkev out! 😤
      </p>
      <div className="links">
        <a href="https://docs.google.com/document/d/1jXL2Dp3AsqTthjeNM_speCZ7vte5kLclZF9JUXBnZMQ/edit?usp=sharing">
          resume
        </a>{" "}
        | <a href="https://github.com/kev-kev/">github</a> |{" "}
        <a href="www.linkedin.com/in/kevinclark93">linkedin</a> |{" "}
        <a class="mailtoui" href="mailto:kevin.clark93@gmail.com">
          email me
        </a>
      </div>
    </div>
  );
};

export default Header;
