import React, { Component } from "react";
import Top from "./Top/Top";
import Header from "../../Header/HeaderBar";
import Footer from "../../Footer/Footer";

class Page extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home-page">
          <div className="page-main">
            <Top />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
