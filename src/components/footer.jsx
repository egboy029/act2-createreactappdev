import React from 'react';

function Footer({ docLinks, communityLinks, socialLinks, logoSrc, copyrightText }) {
  return (
    <footer className="footer footer--dark">
      <div className="container container-fluid">
        <div className="row footer__links">
          <div className="col footer__col">
            <div className="footer__title">Docs</div>
            <ul className="footer__items">
              {docLinks.map((link) => (
                <li key={link.label} className="footer__item">
                  <a href={link.url} className="footer__link-item">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col footer__col">
            <div className="footer__title">Community</div>
            <ul className="footer__items">
              {communityLinks.map((link) => (
                <li key={link.label} className="footer__item">
                  <a href={link.url} className="footer__link-item">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col footer__col">
            <div className="footer__title">Social</div>
            <ul className="footer__items">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.label} className="footer__item">
                  <a href={socialLink.url} className="footer__link-item">
                    <span>{socialLink.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom text--center">
          <div className="margin-bottom--sm">
            <img src={logoSrc.light} alt="Facebook Open Source Logo" className="themedImage_hT0q themedImage--light_t77m footer__logo" />
            <img src={logoSrc.dark} alt="Facebook Open Source Logo" className="themedImage_hT0q themedImage--dark_lYkc footer__logo" />
          </div>
          <div className="footer__copyright">{copyrightText}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
