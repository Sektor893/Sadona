import React from "react";
import "./Footer.scss";
//Images & Logos
import infoLogo from "../../../src/assets/information.svg";
import news from "../../assets/newspaper.svg";
import arrow from "../../assets/Icon open-arrow-bottom.svg";
import logo from "../../assets/image-assetbrown.png";
import phone from "../../assets/phone-icon.svg";
import envelope from "../../assets/Icon awesome-envelope.svg";
import location from "../../assets/Icon material-location-on.svg";
import clock from "../../assets/clock.svg";
import facebook from "../../assets/Icon zocial-facebook.svg";
import instagram from "../../assets/Icon simple-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="help">
        <div className="help-header">
          <div className="help-logo">
            <img src={infoLogo} alt="info-logo" />
            <span>FAQs</span>
          </div>
          <h3>How Can We Help You?</h3>
        </div>
        <button>Recently Asked Questions</button>
      </div>

      <div className="news">
        <h3>News</h3>
        <div className="section">
          <div className="section-left">
            <div className="left-img"></div>
            <div className="left-content">
              <div className="news-logo">
                <img src={news} alt="news" />
                <span>News</span>
              </div>
              <h4>A Message from Donna Brown</h4>
              <div className="time">
                <p>08.09.2020.</p>
                <span>14:30h</span>
                <hr />
              </div>
              <p>
                Sadona Salon + Spa was inspired around Ayurvedic principles—the
                belief that health and wellness occur when there is true balance
                between the mind...
              </p>
              <div className="arrow">
                <span>Read More</span>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="section-middle">
            <div className="middle-img"></div>
            <div className="middle-content">
              <div className="news-logo">
                <img src={news} alt="news" />
                <span>News</span>
              </div>
              <h4>Sadona Salon COVID update</h4>
              <div className="time">
                <p>08.09.2020.</p>
                <span>14:30h</span>
                <hr />
              </div>
              <p>
                We have all become increasingly aware of the severity and
                seriousness of COVID-19. Your satisfaction and safety are of
                utmost concern to us...
              </p>
              <div className="arrow">
                <span>Read More</span>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="section-right">
            <div className="right-img"></div>
            <div className="right-content">
              <div className="news-logo">
                <img src={news} alt="news" />
                <span>News</span>
              </div>

              <h4>Love Yourself.</h4>

              <div className="time">
                <p>08.09.2020.</p>
                <span>14:30h</span>
                <hr />
              </div>

              <p>
                Sadona Salon + Spa was inspired around Ayurvedic principles—the
                belief that health and wellness occur when there is true balance
                between the mind...
              </p>

              <div className="arrow">
                <span>Read More</span>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wrap">
        <div className="footer-header">
          <h4>Surprise your friends & family with our gift card!</h4>
          <button>Purchase Gift Cards Here</button>
        </div>
        <hr />
        <img src={logo} alt="logo" />

        <div className="footer-content">
          <h4>We'd love to hear from you.</h4>
          <img className="clock" src={clock} alt="clock" />
          <div className="footer-text">
            <span>(410)263-1515</span>
            <span>info@mysadona.com</span>
            <span>15 West Street Annapolis,MD 21401</span>
          </div>
          <div className="footer-icons">
            <img src={phone} alt="clock" />
            <img src={envelope} alt="clock" />
            <img src={location} alt="clock" />
          </div>

          <div className="footer-text2">
            <span>Monday - Tuesday: 11am-7pm</span>
            <span>Wednesday - Friday: 9am-7pm</span>
            <span>Saturday:8am-4pm</span>
            <span>Sunday:10am-4pm</span>
          </div>

          <div className="footer-text3">
            <span>Follow us</span>
            <img src={facebook} alt="facebook" />
            <img className="insta" src={instagram} alt="instagram" />
          </div>
        </div>
        <hr className="hr-bottom" />

        <div className="bottom-footer-heading">
          <p>Menu</p>
          <p className="services">Services</p>
        </div>

        <div className="footer-navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="footer-services">
            <li>
              <a href="#">Salon Services</a>
            </li>
            <li>
              <a href="#">Spa Services</a>
            </li>
            <li>
              <a href="#">Bridal Services</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>Copyright 2016 Herrman Advertising</p>
          <div className="vertical"></div>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
