import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { deleteImageFireStorage, removePostFireDB } from "../../firebase/Firebase.config";

class ProjectGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleEdit(id, src, title, name, text) {
    // scrolls up to NewsForm
    window.scrollTo(0, 0);
    // populates sibling NewsForm.jsx state (via parent component)
    // with data (including ID) of admin update post
    const editObj = { id, src, name, title, text };
    this.props.editPostInputs(editObj);
  }
  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  handleDelete(id, src) {
    if (src !== null) {
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("projects", id);
  }
  render() {
    const { expanded } = this.state;
    const { id, src, title, name, text, imgFile, auth } = this.props;
    return (
      <div>
      <div className="card project_content_title mt-5">
        <div className="card-header project_content_header text-center text-uppercase">
                {name} 
          {auth && (
            <div className="float-right">
              <FontAwesomeIcon type="button"
                onClick={() => {
                  this.handleEdit(id, src, title, name, text, imgFile);
                }}
                className="icons"
                icon={faEdit}
              />
              <FontAwesomeIcon type="button"
                onClick={() => { this.handleDelete(id, src)}}
                className="icons"
                icon={faTrash}
              />
            </div>
          )}
         </div>
         <h5 className="card-title text-center">{title}</h5>
       <div className="card-body d-flex">
            <div className="col-md-3">
              <img src={src} alt="..." className="img-thumbnail" />
            </div>
            <div className='col-md-8'>
            <p className={ !expanded ? "fade text-truncate" : "card-text text-truncate" } >
              {text}
            </p>
              <button
                onClick={this.handleClick}
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target={`#${id}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Read More
              </button>
          </div>
        </div>
      </div>
        <div className="collapse single_project" id={id}>
         <div className="col-md-6">
           <img src={src} className="sngl-image mt-5 img-thumbnail" alt="..." />
         </div>
           <div style={{backgroundColor: 'blue', color: 'white'}} className="col-md-8 text-center mt-3 rounded p-3">{text}</div>
        </div>
      </div>
    );
  }
}

export default ProjectGroup;
