import "./News.styles.css";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import PagePosts from "../PagePosts.component";
import AdminForm from "../AdminForm.component";
import Pagination from "../Pagination.component";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
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
        nameGeo={item.nameGeo}
        nameEng={item.nameEng}
        nameRus={item.nameRus}
        titleGeo={item.titleGeo}
        titleEng={item.titleEng}
        titleRus={item.titleRus}
        textGeo={item.textGeo}
        textEng={item.textEng}
        textRus={item.textRus}
        src={item.src}
        key={index}
        id={newsIds[index]}
        pageName="news"
      />
    ));
  }
  const total = reduxNews !== null && Object.values(reduxNews).length
  return (
    <div className="news_background">
      <h1 style={{ color: "#333" }} className="text-center p-4 text-uppercase">
        {News}
      </h1>
      {auth && <AdminForm editObj={state} pageName="news" />}
      <div className="mt-5">
        {newsList}
        {!auth && total !== newsPerPage && <Pagination paginate={paginate} currPage={currPage} perPage={newsPerPage}total={total} />}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = reduxStore => ({
  reduxNews: reduxStore.siteData.news
});

export default connect(mapStateToProps)(News);
