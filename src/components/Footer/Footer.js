import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebookSquare,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-main">
          <div className="footer-top">
            <div className="container">
              <span className="heading">To Techs</span>
              <span>We create possibilities for the connected world</span>
            </div>

            <div className="container">
              <span className="heading">Explore</span>
              <span>Home</span>
              <span>About</span>
              <span>Capabilities</span>
              <span>Careers</span>
            </div>

            <div className="container">
              <span className="heading">Visit</span>
              <span>Silicon Valey, Califonia</span>
              <span>Ho Chi Minh, VN</span>
            </div>

            <div className="container">
              <span className="heading">New Busisness</span>
              <span>ToTechs@gmail.com</span>
              <span>(+84) 123-456-789</span>
            </div>

            <div className="container">
              <span className="heading">Legal</span>
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>

          <div className="footer-bottom">
            {/* <div className="bottom-main"> */}
            <span>©2020 ToTechs. All rights reserved.</span>

            <div className="social-media">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com"
              >
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/c9b9uHM"
              >
                <FontAwesomeIcon className="icon" icon={faDiscord} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com"
              >
                <FontAwesomeIcon className="icon" icon={faYoutube} />
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
