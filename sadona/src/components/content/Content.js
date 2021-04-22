import React from "react";
import "./Content.scss";

// logo and image import
import salon from "../../assets/salon.svg";
import hairImg from "../../assets/pexels-engin-akyurt-3065209.png";
import arrowIcon from "../../assets/Icon open-arrow-bottom.svg";
import candle from "../../assets/candle.svg";
import brideLogo from "../../assets/bride.svg";
import sugar from "../../assets/sugar.svg";
import cezanne from "../../assets/Cezanne-Stylign-Line.png";
import shippingLogo from "../../assets/shipping.svg";

const Content = () => {
  return (
    <>
      <div className="main-header">
        <div className="main-wrap">
          <hr />
          <h1>
            Sadona was conceived with the belief that a salon and spa should be
            a welcome and tranquil experience.
          </h1>
          <p>
            And from the moment you walk through our door,you will see exactly
            what we mean.Come,let's look around together.
          </p>
          <button>Our Story</button>
          <hr />
        </div>
      </div>

      <div className="salon-services">
        <div className="salon-icon">
          <img src={salon} alt="makaze" />
          <span>Services</span>
        </div>
        <div className="salon-heading">
          <h3>Salon Services</h3>
          <p>
            Our salon is a forward-thinking studio with experts that understand
            your individuality and specialize in your unique beauty.
          </p>
          <button>All Services</button>
        </div>
        <div className="salon-img">
          <img src={hairImg} alt="hair" />
        </div>

        <div className="arrow-wrap">
          <img src={arrowIcon} alt="arrow" />
          <span>Check out More</span>
        </div>
      </div>
      <div>
        <div className="spa-services-wrapp">
          <div className="spa-services">
            <div className="spa-heading">
              <div className="candle-icon">
                <img src={candle} alt="candle" />
                <span>Services</span>
              </div>
              <h3>Spa Services</h3>
              <p>
                Both an escape and an oasis, the luxurious spa experiences at
                Sadona will leave you feeling soothed,energized and refreshed
              </p>
              <button>All Services</button>
              <div className="arrow">
                <img src={arrowIcon} alt="arrow" />
                <span>Check out more</span>
              </div>
            </div>
            <div className="image"></div>
          </div>
        </div>

        <div className="bridal-services">
          <div className="bridal-header">
            <div className="bridal-logo">
              <img src={brideLogo} alt="logo" />
              <span>Services</span>
            </div>
            <div className="bridal-header-wrap">
              <h3>Bridal Services</h3>
              <p>
                We offer full bridal salon & spa services as well as a little
                retreat to prepare and enjoy that memorable “get ready time”
                with family and friends on your most beautiful and special day!
              </p>
              <button>All Services</button>
            </div>
          </div>
        </div>
      </div>

      <div className="salt">
        <div className="salt-header">
          <div className="salt-logo">
            <img src={sugar} alt="logo" />
            <span>Services</span>
          </div>
          <h3>Salt</h3>
          <p>
            Salt possesses wonderful healing and rejuvenation properties.
            Indulge in one of our salt treatments and experience strength and
            vitality from one of nature's most ancient forms of therapy.
          </p>
        </div>
        <div className="salt-img"></div>
      </div>

      <div className="cezanne">
        <hr />
        <h3>Sadona Salon + Spa was inspired around Ayurvedic principles.</h3>
        <p>
          The belief that health and wellness occur when there is true balance
          between the mind, body and spirit.
        </p>
        <hr />
      </div>

      <div className="cezanne-product">
        <div className="cezanne-header">
          <div className="cezanne-logo">
            <img src={shippingLogo} alt="shipping" />
            <span>Products</span>
          </div>
          <h3>Cezzane</h3>
          <p>
            Transform your frizzy, difficult, kinky, curly hair into soft,
            manageable, beautiful locks.
          </p>
        </div>
        <img src={cezanne} alt="cezanne" className="products" />
      </div>
    </>
  );
};

export default Content;
