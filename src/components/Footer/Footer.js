import "./Footer.css";
import facebookIcon from "../../assets/img/facebook.png";
import instagramIcon from "../../assets/img/instagram.png";
import twitterIcon from "../../assets/img/twitter.png";
import brandLogo from "../../assets/img/brand.png";
import linkedinIcon from "../../assets/img/linkedin.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social">
        <span>Seguinos en</span>
        <div className="footer__social-icons">
          <div className="footer__social-icon">
            <a href="https://www.facebook.com" target="_blank">
              <img
                className="footer__icon"
                src={facebookIcon}
                alt="Facebook"
              ></img>
            </a>
          </div>
          <div className="footer__social-icon">
            <a href="https://www.instagram.com" target="_blank">
              <img
                className="footer__icon"
                src={instagramIcon}
                alt="Instagram"
              ></img>
            </a>
          </div>
          <div className="footer__social-icon">
            <a href="https://www.twitter.com" target="_blank">
              <img
                className="footer__icon"
                src={twitterIcon}
                alt="Twitter"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__logo">
        <div className="footer__logo-container">
          <img src={brandLogo} alt="Xperiment Brand"></img>
        </div>
      </div>
      <div className="footer__author">
        <span>Desarrollado por Perez Fermin</span>
        <div className="footer__author-icon">
          <div className="footer__author-icon-container">
            <a href="https://www.linkedin.com/in/fermin-perez/" target="_blank">
              <img
                className="footer__icon"
                src={linkedinIcon}
                alt="LinkedIn"
              ></img>
            </a>
          </div>
        </div>
        <span>© 2022 Xperiment. All Rights Reserved.</span>
      </div>
    </div>
  );
};
