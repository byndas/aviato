import React from "react";
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
          console.log("REDUX STORE", reduxState);
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
            if (typeof pageValues[i].textGeo !== "undefined") {
              if (pageValues[i].textGeo.includes(searchInput)) {
                pageMatches.push(pageValues[i]);
                continue;
              }
            }
            if (typeof pageValues[i].textEng !== "undefined") {
              if (pageValues[i].textEng.includes(searchInput)) {
                pageMatches.push(pageValues[i]);
                continue;
              }
            }
            if (typeof pageValues[i].textRus !== "undefined") {
              if (pageValues[i].textRus.includes(searchInput)) {
                pageMatches.push(pageValues[i]);
                continue;
              }
            }
          }
          let pageMatchDivArray = pageMatches.map((item, index) => (
            <div
              className="container text-center mt-5 border-bottom"
              id={pageIds[index]}
              key={pageIds[index]}
            >
              <img className="img-thumbnail" src={item.src} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.title}</p>
              <p className="rounded p-3">
                {item.textGeo}
                {item.textEng}
                {item.textRus}
              </p>
            </div>
          ));
          console.log("pageMatchDivArray", pageMatchDivArray);
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
      console.log("FINAL SEARCH RESULT", finalSearchResults);
    }
    return <div id="container">{finalSearchResults}</div>;
  }
}
const mapStateToProps = reduxState => ({
  entireRedux: reduxState.siteData
});

export default connect(mapStateToProps)(SearchResults);
