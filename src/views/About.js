import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import Main from "../layouts/Main";
import markdown from "../data/about.md";

const count = markdown
  .split(/\s+/)
  .map(s => s.replace(/\W/g, ""))
  .filter(s => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {
  // set markdown state
  const [srcMarkdown, setSrcMarkdown] = useState("");

  // fetch markdown
  useEffect(() => {
    fetch(markdown)
      .then(response => response.text())
      .then(text => {
        setSrcMarkdown(text);
      });
  });

  // view
  return (
    <Main>
      <Helmet title="About" />
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Us</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <ReactMarkdown
          source={srcMarkdown}
          renderers={{
            Link: LinkRenderer
          }}
          escapeHtml={false}
        />
      </article>
    </Main>
  );
};

export default About;
