import React, { Component } from "react";
import test from "../../../../image/test.jpg";
import { Link } from "react-router-dom";

class Top extends Component {
  state = {};
  render() {
    return (
      <div className="top">
        <div className="left">
          <Link to="/blog">
            <div className="blog">
              <img src={test} alt="" />
              <div className="content">
                <div className="content-top">
                  <span className="title">How to be Programmer?</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nisi reprehenderit perferendis quod
                  </span>
                </div>
                <div className="content-bottom">
                  <span className="author">Aspodel Tran</span>
                  <span className="time">Jun 29</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="right">
          <Link to="/blog">
            <div className="blog">
              <img src={test} alt="" />
              <div className="content">
                <div className="content-top">
                  <span className="title">How to be Programmer?</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nisi reprehenderit perferendis quod
                  </span>
                </div>
                <div className="content-bottom">
                  <span className="author">Aspodel</span>
                  <span className="time">Jun 29</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog">
            <div className="blog">
              <img src={test} alt="" />
              <div className="content">
                <div className="content-top">
                  <span className="title">How to be Programmer?</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nisi reprehenderit perferendis quod
                  </span>
                </div>
                <div className="content-bottom">
                  <span className="author">Aspodel</span>
                  <span className="time">Jun 29</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog">
            <div className="blog">
              <img src={test} alt="" />
              <div className="content">
                <div className="content-top">
                  <span className="title">How to be Programmer?</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nisi reprehenderit perferendis quod
                  </span>
                </div>
                <div className="content-bottom">
                  <span className="author">Aspodel</span>
                  <span className="time">Jun 29</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Top;
