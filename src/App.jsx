import React from "react";
import Home from "./pages/home/home.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fireAuth, fireDbRef } from "./Firebase.config";
import { updateReduxWithFireDb } from "./redux/site/site.actions";
import { LanguageProvider } from "./context/LanguageContext";

import Navbar from "./navbar/navbar.component";
import About from "./pages/about/about.component";
import Catalog from "./pages/catalog/Catalog.component";
import Contact from "./pages/contact/Contact.component";
import Gallery from "./pages/gallery/Gallery.component";
import Login from "./pages/login/Login.component";
import News from "./pages/news/News.component";
import Projects from "./pages/projects/Projects.component";
import SearchResults from "./pages/SearchResults.component";

// 1nt3rnat10nal

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      searchInput: ""
    };
    this.setSearchInput = this.setSearchInput.bind(this);
    this.onFireDbChange = this.onFireDbChange.bind(this);
  }
  onFireDbChange(snapshot) {
    this.props.updateReduxWithFireDb(snapshot.val());
  }
  componentDidMount() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ auth: true });
      } else {
        this.setState({ auth: false });
      }
    });
    fireDbRef.on("value", this.onFireDbChange);
  }
  componentWillUnmount() {
    fireDbRef.off("value", this.onFireDbChange);
  }
  setSearchInput(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  render() {
    const { auth, searchInput } = this.state;
    return (
      <div>
        <LanguageProvider>
          <Navbar
            auth={auth}
            searchInput={searchInput}
            setSearchInput={this.setSearchInput}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              render={() =>
                this.state.auth ? <Redirect to="/news" /> : <Login />
              }
            />
            <Route
              exact
              path="/searchResults"
              render={() => <SearchResults searchInput={searchInput} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/catalog"
              render={() => <Catalog auth={auth} />}
            />
            <Route
              exact
              path="/gallery"
              render={() => <Gallery auth={auth} />}
            />
            <Route exact path="/news" render={() => <News auth={auth} />} />
            <Route
              exact
              path="/projects"
              render={() => <Projects auth={auth} />}
            />
            <Redirect to="/" />
          </Switch>
        </LanguageProvider>
      </div>
    );
  }
}

export default connect(null, { updateReduxWithFireDb })(App);
