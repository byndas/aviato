import "./Projects.styles.css";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import PagePosts from "../PagePosts.component";
import AdminForm from "../AdminForm.component";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
import translate from "../../language/translate";
import Pagination from "../Pagination.component";

function Projects({ auth, reduxProjects }) {
  const { language } = useContext(LanguageContext);
  const { Projects } = translate[language];
  const [state, setState] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [projectsPerPage] = useState(4);
  const indexOfLastProject = currPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const paginate = pageNumber => setCurrPage(pageNumber);
  // state controls form inputs
  const editPostInputs = postObj => {
    setState(postObj);
  };
  let projectList;

  if (reduxProjects !== null) {
    const projectsIds = Object.keys(reduxProjects).reverse();
    const projectsArr = Object.values(reduxProjects).reverse();
    const currentProjects = !auth
      ? projectsArr.slice(indexOfFirstProject, indexOfLastProject)
      : projectsArr;
    // collects all projects in redux store
    projectList = currentProjects.map((item, index) => (
      <PagePosts
        auth={auth}
        editPostInputs={editPostInputs}
        name={item.name}
        title={item.title}
        text={item.text}
        src={item.src}
        key={index}
        id={projectsIds[index]}
        pageName="projects"
      />
    ));
  }
  return (
    <div>
      <div className="project_container">
        <h1 className="project_title font-italic p-5">{Projects}</h1>
        {auth && (
          <div className="container project_form">
            <button
              type="button"
              className="btn btn-info btn-sm mt-5"
              data-toggle="modal"
              data-target="#create"
            >
              Create
            </button>
            <div className="modal fade" id="create" role="dialog">
              <div className="modal-dialog modal-md">
                <div className="modal-content">
                  <AdminForm editObj={state} pageName="projects" />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectList}
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          {!auth && (
            <Pagination
              paginate={paginate}
              currPage={currPage}
              perPage={projectsPerPage}
              total={
                reduxProjects !== null && Object.keys(reduxProjects).length
              }
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = reduxStore => ({
  reduxProjects: reduxStore.siteData.projects
});

export default connect(mapStateToProps)(Projects);
