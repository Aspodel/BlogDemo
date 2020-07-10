import React, { Component } from "react";
import Footer from "../../Footer/Footer";
import Image from "../../../image/test.jpg";
import Profile from "../../../image/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { GetBlog, AuthorOfBlog, Like } from "../../Services/Api";
import { formatTime } from "../../../utils/formatTime";
import { classifyParagraph } from "../../../utils/classifyParagraph";

class BlogDetail extends Component {
  state = {
    data: null,
    authors: null,
    loading: true,
    error: true,
    scroll: 0,
  };

  async componentDidMount() {
    window.addEventListener("scroll", this.progressBar);

    try {
      const data = await GetBlog(3);
      const authors = await AuthorOfBlog(3);
      console.log(authors);
      console.log(data);
      this.setState({
        data,
        authors,
        loading: false,
        error: false,
      });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.progressBar);
  }

  progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(scrollTotal / heightWin) * 100}%`;

    this.setState({
      scroll: scroll,
    });
  };

  render() {
    const { data, authors, loading, error } = this.state;
    let BlogContent;

    if (!loading && !error) {
      let paragraphs = data.paragraphs;
      BlogContent = paragraphs.map((paragraphs) => {
        return classifyParagraph(paragraphs);
      });
    }

    if (error && !loading) {
      return <h1>Woops, something went wrong trying to fetch blog details.</h1>;
    }

    if (loading) {
      return <h1>Loading ...</h1>;
    }

    const progressMainWrapper = {
      background: "rgba(255, 255, 255, 0.14)",
      height: "100%",
      position: "fixed",
      top: 0,
      right: 0,
      zIndex: 101,
      width: "10px",
    };

    const progressMainStyle = {
      height: this.state.scroll,
      background: "#000000",
      width: "10px",
    };

    return (
      <React.Fragment>
        <div className="heading-bar">
          <a href="/">To Techs</a>
        </div>
        <div className="progress-bar" style={progressMainWrapper}>
          <div style={progressMainStyle} />
        </div>
        <div className="blog-detail">
          <div className="blog-main">
            <div className="blog-top">
              <span className="title">{data.title}</span>
              <span className="description">{data.description}</span>
              <div className="author">
                {authors.map((author) => (
                  <React.Fragment key={author.author}>
                    <img src={author.image} alt="" />
                  </React.Fragment>
                ))}
                <div className="details">
                  <div className="author-name">
                    {authors.map((author) => (
                      <span className="comma">{author.author}</span>
                    ))}
                  </div>

                  <span className="time">{formatTime(data.time)}</span>
                </div>
              </div>
              <img src={data.introImage} alt="" />
            </div>
            <div className="blog-mid">{BlogContent}</div>
            <div className="blog-bottom">
              <div className="tags">
                <span>Programming</span>
                <span>React</span>
              </div>
              <div className="like">
                <FontAwesomeIcon
                  onClick={() => Like(3)}
                  className="icon"
                  icon={faHeart}
                />
                <span>{(data.like + 1).toLocaleString()}</span>
              </div>
              <div className="author">
                {authors.map((author) => (
                  <div className="author-details">
                    <img src={author.image} alt="" />
                    <div className="details">
                      <span>WRITTEN BY</span>
                      <span className="name">
                        <span>{author.author}</span>
                        <a className="see-more" href="/">
                          See More
                        </a>
                      </span>
                      <span className="description">{author.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="suggestion">
          <div className="suggestion-main">
            <div className="header">More from To Techs</div>
            <div className="suggestion-result">
              <div className="blog">
                <img src={Image} alt="" />
                <div className="title">How to be a programmer?</div>
                <div className="infor">
                  <img src={Profile} alt="" />
                  <div className="blog-infor">
                    <div className="author">Aspodel Tran</div>
                    <div className="time">Jun 24</div>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <span>2K</span>
                  </div>
                </div>
              </div>

              <div className="blog">
                <img src={Image} alt="" />
                <div className="title">How to be a programmer?</div>
                <div className="infor">
                  <img src={Profile} alt="" />
                  <div className="blog-infor">
                    <div className="author">Aspodel Tran</div>
                    <div className="time">Jun 24</div>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <span>2K</span>
                  </div>
                </div>
              </div>

              <div className="blog">
                <img src={Image} alt="" />
                <div className="title">How to be a programmer?</div>
                <div className="infor">
                  <img src={Profile} alt="" />
                  <div className="blog-infor">
                    <div className="author">Aspodel Tran</div>
                    <div className="time">Jun 24</div>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <span>2K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BlogDetail;
