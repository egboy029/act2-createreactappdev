import React, { useState } from "react";

function GettingStarted({ isDarkMode }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className={`gettingStartedSection_6aRe ${isDarkMode ? "dark-mode" : ""}`}
    >
      <div className="container padding-vert--xl text--left">
        <div className="row">
          <div className="col col--4 col--offset-1">
            <h2
              onClick={() => setShowImage(!showImage)}
              style={{ cursor: "pointer" }}
              className={isDarkMode ? "dark-mode" : ""}
            >
              Get started in seconds
            </h2>
            <p className={isDarkMode ? "dark-mode" : ""}>
              Whether you’re using React or another library, Create React App
              lets you <strong>focus on code, not build tools</strong>.<br />
              <br />
              To create a project called <i>my-app</i>, run this command:
            </p>
            <div
              className={`codeBlockContainer_Xn-l language-sh theme-code-block ${isDarkMode ? "dark-mode" : ""}`}
            >
              <div className="codeBlockContent_cn14 sh">
                <pre
                  tabIndex={0}
                  className="prism-code language-sh codeBlock_hf8G thin-scrollbar"
                  style={{ color: "#bfc7d5", backgroundColor: "#292d3e" }}
                >
                  <code className="codeBlockLines_Jgjh">
                    <span className="token-line" style={{ color: "#bfc7d5" }}>
                      <span className="token plain">
                        npx create-react-app my-app
                      </span>
                      <br />
                    </span>
                  </code>
                </pre>
                <button
                  type="button"
                  aria-label="Copy code to clipboard"
                  className="copyButton_a5m3 clean-btn"
                >
                  Copy
                </button>
              </div>
            </div>
            <br />
          </div>
          <div className="col col--5 col--offset-1">
            {showImage && (
              <img
                className="featureImage_fOUF"
                alt="Easy to get started in seconds"
                src="https://create-react-app.dev/img/update.png"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
