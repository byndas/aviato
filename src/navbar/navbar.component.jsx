import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.styles.css";
import Logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context/LanguageContext";
import { fireAuth } from "../Firebase.config";
import translate from "../language/translate";

class Navbar extends React.Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.searchInput !== "") {
      this.props.history.push("/searchResults");
      document.getElementById("search").value = "";
    }
  }

  render() {
    const { auth, searchInput, setSearchInput } = this.props;
    const { language, handleChange } = this.context;
    const logOut = () => fireAuth.signOut();
    const { News,Home,AboutUs,Projects,Gallery,Catalog,Contact,Search } = translate[language];
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light background shadow">
          <Link className="navbar-brand" to="/">
            <div className='logo-container'>
            <img
              alt="logo"
              onClick={this.props.clearInput}
              className="logo"
              src={Logo}
            />
            </div>
          </Link>
          <a
             style={{color: 'gray'}}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            href="/">
            <span className="navbar-toggler-icon"></span>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              onClick={this.props.clearInput}
              className={`${
                language === "Geo"
                  ? "navbar-nav mr-auto nav_links geo_font"
                  : "eng_rus_font navbar-nav mr-auto nav_links"
              }`}
            >
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/">
                  {Home}
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/news">
                  {News}
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/about">
                  {AboutUs} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/projects">
                  {Projects} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/gallery">
                  {Gallery} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/catalog">
                  {Catalog}
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link link_color" to="/contact">
                  {Contact}
                </Link>
              </li>
            </ul>
            <form className="search" onSubmit={this.handleClick}>
              <input
                id="search"
                name="searchState"
                className="search__input"
                type="search"
                aria-label="Search"
                placeholder={Search}
                value={searchInput}
                onChange={setSearchInput}
              />
              <button
                id="searchBtn"
                type="button"
                className="search__button"
                // onClick={this.handleClick}
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon
                  onClick={this.handleClick}
                  className="search__icon"
                  icon={faSearch}
                  style={{ color: "#333" }}
                />
              </button>
            </form>
            <div className="socials">
              <a
                href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} className="social_icons" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="social_icons" />
              </a>
              <a
                href="https://www.instagram.com/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="social_icons" />
              </a>
            </div>
            {auth && (
              <div className="option" onClick={logOut}>
                LOG OUT
              </div>
            )}
            <select
              className="language"
              value={language}
              onChange={handleChange}
            >
              <option value="Geo">Geo</option>
              <option value="Eng">Eng</option>
              <option value="Rus">Rus</option>
            </select>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
