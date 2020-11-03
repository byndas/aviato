import "./News.styles.css";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import PagePosts from "../PagePosts.component";
import AdminForm from "../AdminForm.component";
import Pagination from "../Pagination.component";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
import { backgroundColor } from "../catalog/Catalog.component";
import translate from "../../language/translate";

function News({ auth, reduxNews }) {
  const [state, setState] = useState(null);
  const { language } = useContext(LanguageContext);
  const { News } = translate[language];
  const [currPage, setCurrPage] = useState(1);
  const [newsPerPage] = useState(2);
  const indexOfLastNews = currPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const paginate = pageNumber => setCurrPage(pageNumber);

  const editPostInputs = postObj => {
    setState(postObj);
  };

  let newsList;
  if (reduxNews !== null) {
    const newsIds = Object.keys(reduxNews).reverse();
    const newsArr = Object.values(reduxNews).reverse();
    const currentNews = !auth
      ? newsArr.slice(indexOfFirstNews, indexOfLastNews)
      : newsArr;
    // collects all news items in redux store
    newsList = currentNews.map((item, index) => (
      <PagePosts
        auth={auth}
        editPostInputs={editPostInputs}
        name={item.name}
        title={item.title}
        text={item.text}
        src={item.src}
        key={index}
        id={newsIds[index]}
        pageName="news"
      />
    ));
  }
  return (
    <div style={backgroundColor}>
      <h1 className="text-center font-italic heading p-4 text-uppercase">
        {News}
      </h1>
      {auth && <AdminForm editObj={state} pageName="news" />}
      <div className="container mt-5">
        {newsList}
        {!auth && (
          <Pagination
            paginate={paginate}
            currPage={currPage}
            perPage={newsPerPage}
            total={reduxNews !== null && Object.values(reduxNews).length}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = reduxStore => ({
  reduxNews: reduxStore.siteData.news
});

export default connect(mapStateToProps)(News);
