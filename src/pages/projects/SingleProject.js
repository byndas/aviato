// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import "./Projects.styles.css";

// class SingleProject extends Component {
//   render() {
//     const { reduxProjects, match} = this.props;

//     return (
//       <>
//       {reduxProjects !== null && (
//       <div className="project_container">
//         <h1 className="project_title font-italic">{reduxProjects[match.params.id].name}</h1>
//         <div className="card card_project_content">
//           <div className="card-header text-center text-uppercase">
//             {reduxProjects[match.params.id].name}
//           </div>
//           <h5 className="card-title text-center">{reduxProjects[match.params.id].title}</h5>
//           <div className="card-body text-center">
//             <div className="col-md-8">
//               <img src={reduxProjects[match.params.id].src} alt="..." className="img-thumbnail" />
//             </div>
//             <div className="col-md-12 text-center mt-3">
//               <p className="card-text">{reduxProjects[match.params.id].text}</p>
//               <Link className="btn btn-primary" type="button" to="/projects">
//                 go Back
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div> )
//       }
//       </>
//     );
//   }
// }

// const mapStateToProps = reduxStore => ({
//   reduxProjects: reduxStore.siteData.projects
// });

// export default connect(mapStateToProps)(SingleProject);


