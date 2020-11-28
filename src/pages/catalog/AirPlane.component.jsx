import "./Catalog.styles.css";
import React, { Component } from "react";
import PagePosts from "../PagePosts.component";
import { LanguageContext } from "../../context/LanguageContext";
import translate from "../../language/translate";

class AirPlane extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { AirPlane } = translate[language];
    const { auth, reduxCatalog, editPostInputs } = this.props;

    let planeList;

    if (reduxCatalog !== null) {
      const planeIds = Object.keys(reduxCatalog).reverse();
      const planeArr = Object.values(reduxCatalog);

      planeList = planeArr
        .reverse()
        .map((item, index) => (
          <PagePosts
            auth={auth}
            editPostInputs={editPostInputs}
            nameGeo={item.nameGeo}
            nameEng={item.nameEng}
            nameRus={item.nameRus}
            textGeo={item.textGeo}
            textEng={item.textEng}
            textRus={item.textRus}
            src={item.src}
            id={planeIds[index]}
            key={index}
            pageName="catalog"
          />
        ));
    }
    return (
      <div className='airplane-container'>
        <div className="container border-bottom">
        <h1 style={{fontFamily: "BPG Nino Mtavruli", fontWeight: 'bold' }} className="text-center heading p-3 airplane text-uppercase">
          {AirPlane}
        </h1>
        <div className="row row-cols-1 row-cols-md-2 mt-5">{planeList}</div>
        </div>
      </div>
    );
  }
}

export default AirPlane;
