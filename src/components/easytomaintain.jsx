import React, { useState } from "react";

function EasyToMaintain() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <div className="container padding-vert--xl text--left">
        <div className="row">
          <div className="col col--4 col--offset-1">
            {showImage ? (
              <img
                className="featureImage_fOUF"
                alt="Easy to update"
                src="https://create-react-app.dev/img/update.png"
              />
            ) : null}
          </div>
          <div className="col col--5 col--offset-1">
            <h2
              onClick={() => setShowImage(!showImage)}
              style={{ cursor: "pointer" }}
            >
              Easy to Maintain
            </h2>
            <p>
              Updating your build tooling is typically a daunting and
              time-consuming task. When new versions of Create React App are
              released, you can upgrade using a single command:
            </p>
            <div className="codeBlockContainer_Xn-l language-sh theme-code-block">
              <div className="codeBlockContent_cn14 sh">
                <pre
                  tabIndex={0}
                  className="prism-code language-sh codeBlock_hf8G thin-scrollbar"
                  style={{ color: "#bfc7d5", backgroundColor: "#292d3e" }}
                >
                  <code className="codeBlockLines_Jgjh">
                    <span className="token-line" style={{ color: "#bfc7d5" }}>
                      <span className="token plain">
                        npm install react-scripts@latest
                      </span>
                      <br />
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyToMaintain;
