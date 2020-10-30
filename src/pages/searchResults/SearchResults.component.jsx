import React from "react";
import "./SearchResults.styles.css";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.pageSearch = this.pageSearch.bind(this);
  }
  pageSearch(reduxState, searchInput, finalResultArr) {
    if (reduxState !== null) {
      if (typeof reduxState !== "undefined") {
        if (finalResultArr.length < 20) {
          const pageMatches = [];
          const pageIds = Object.keys(reduxState);
          const pageValues = Object.values(reduxState);
          // collects redux page items that include the search input value
          for (let i = 0; i < pageValues.length; i++) {
            if (pageValues[i].name.includes(searchInput)) {
              pageMatches.push(pageValues[i]);
              continue;
            }
            if (pageValues[i].title.includes(searchInput)) {
              pageMatches.push(pageValues[i]);
              continue;
            }
            if (pageValues[i].text.includes(searchInput)) {
              pageMatches.push(pageValues[i]);
              continue;
            }
          }
          let pageMatchDivArray = pageMatches.map((item, index) => (
            <div className='container text-center mt-5' id={pageIds[index]} key={pageIds[index]}>
              <img className='img-thumbnail ctl-image' src={item.src} alt={item.name}/>
              <h2>{item.name}</h2>
              <p>{item.title}</p>
              <p className='rounded p-3'>{item.text}</p>
            </div>
          ));
          finalResultArr.push(...pageMatchDivArray);
        }
      }
    }
  }
  render() {
    const { entireRedux, searchInput } = this.props;
    const finalSearchResults = [];

    if (entireRedux !== null) {
      if (searchInput.trim().length) {
        this.pageSearch(entireRedux.news, searchInput, finalSearchResults);
        this.pageSearch(entireRedux.gallery, searchInput, finalSearchResults);
        this.pageSearch(entireRedux.projects, searchInput, finalSearchResults);
        this.pageSearch(entireRedux.catalog, searchInput, finalSearchResults);
        if (!finalSearchResults.length) {
          finalSearchResults.push("NO SEARCH RESULTS");
        }
      } else {
        finalSearchResults.push("NO SEARCH RESULTS");
      }
    }
    return <div className="container">{finalSearchResults}</div>;
  }
}
// GIVES SearchResults COMPONENT ACCESS TO ALL OF REDUX STORE DATA
const mapStateToProps = reduxState => ({
  entireRedux: reduxState.siteData
});

export default connect(mapStateToProps, null)(SearchResults);
