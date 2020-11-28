import React, { Component } from "react";
import { connect } from "react-redux";
import AdminForm from "../AdminForm.component";
import AirPlane from "./AirPlane.component";
import Pilots from "./Pilots.component";
import Footer from "../../footer/Footer.component";



class Catalog extends Component {
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = null;

    this.editPostInputs = this.editPostInputs.bind(this);
  }
  editPostInputs(postObj) {
    this.setState(postObj);
  }
  render() {
    const { auth, reduxCatalog } = this.props;
    return (
      <div style={{backgroundColor:'#fff'}}>
        {auth && <AdminForm editObj={this.state} pageName="catalog" />}
        <AirPlane
          auth={auth}
          editPostInputs={this.editPostInputs}
          reduxCatalog={reduxCatalog}/>
        <Pilots />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxCatalog: reduxStore.siteData.catalog
});

export default connect(mapStateToProps)(Catalog);
