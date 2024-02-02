import React from 'react';

function Banner({ supportLink }) {
  return (
    <div id="">
      <div id="" />
      <div>
        <a href="1" className="skipToContent_GxWn">
          Skip to main content
        </a>
      </div>
      <div
        className="announcementBar_eRQg"
        style={{ backgroundColor: '#20232a', color: '#fff' }}
        role="banner"
      >
        <div className="announcementBarContent_hd8n">
          Support Ukraine 🇺🇦 {''}
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine">            
          Help Provide Humanitarian Aid to Ukraine
          </a>
          .
        </div>
      </div>
      <nav className="navbar navbar--fixed-top">
        <div className="navbar__inner">
          <div className="navbar__items">
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </button>
            <a className="navbar__brand" href=" ">
              <div className="navbar__logo">
                <img
                  src="https://create-react-app.dev/img/logo.svg"
                  alt="Create React App Logo"
                  className=""
                />
              </div>
              <b className="navbar__title">Create React App</b>
            </a>
          </div>
          <div className="navbar__items navbar__items--right">
            <a className="navbar__item navbar__link" href="https://create-react-app.dev/docs/getting-started ">
              Docs
            </a>
            <a
              href="https://react.dev/community "
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__item navbar__link"
            >
              <span>

                Help
                <svg
                  width="13.5"
                  height="13.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="iconExternalLink_gzkf"
                >
                  <path
                    fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                  />
                </svg>
              </span>

            </a>
            <a
              href="https://github.com/facebook/create-react-app "
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__item navbar__link"
            >
              <span>

                GitHub
                <svg
                  width="13.5"
                  height="13.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="iconExternalLink_gzkf"
                >
                  <path
                    fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                  />
                </svg>
              </span>
            </a>

            <div className="toggle_hhh4 toggle_o8XW toggleDisabled_TXua">
              <div className="toggleTrack_HbNd" role="button" tabIndex={-1}>
                <div className="toggleTrackCheck_IT5z">
                  <span className="toggleIcon_PY39">🌜</span>
                </div>
                <div className="toggleTrackX_scPi">
                  <span className="toggleIcon_PY39">🌞</span>
                </div>
                <div className="toggleTrackThumb_K2k9" />
              </div>
              <input
                type="checkbox"
                className="toggleScreenReader_ENkX"
              />
            </div>

            <div className="searchBox_9spw">
              <button type="button" className="DocSearch DocSearch-Button" aria-label="Search">
                <span className="DocSearch-Button-Container">
                  <svg width={20} height={20} className="DocSearch-Search-Icon" viewBox="0 0 20 20">
                    <path
                      d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="DocSearch-Button-Placeholder">Search</span>
                </span>
                <span className="DocSearch-Button-Keys" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Banner;
