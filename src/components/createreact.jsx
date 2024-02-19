import React from "react";

function CreateReact({ logoSrc, title, subtitle, getStartedLink }) {
  return (
    <div>
      <div role="presentation" className="navbar-sidebar__backdrop" />
      <div className="main-wrapper">
        <div className="hero hero--dark heroBanner_4JBe">
          <div className="container">
            <img
              className="heroBannerLogo_hHiA margin-vert--md"
              alt="Create React App logo"
              src="https://create-react-app.dev/img/logo.svg"
            />
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
            <div className="getStarted_CALW">
              <a
                className="button button--outline button--primary button--lg"
                href="https://create-react-app.dev/docs/getting-started"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReact;
