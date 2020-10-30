import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteImageFireStorage, removePostFireDB } from "../../firebase/Firebase.config";

class NewsGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  handleEdit(id, src, title, name, text) {
    // scrolls up to NewsForm
    window.scrollTo(0, 0);
    // populates sibling NewsForm.jsx state (via parent component)
    // with data (including ID) of admin update post
    const editObj = { id, src, name, title, text };
    this.props.editPostInputs(editObj);
  }
  handleDelete(id, src) {
    if (src !== null) {
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("news", id);
  }
  render() {
    const { id, src, title, name, text, imgFile, auth } = this.props;
    const { expanded } = this.state;
    return (
      <div className="card mb-5 project_content">
        <h5 className="card-header  text-center text-uppercase">{name}</h5>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          {auth && (
            <div className="float-right">
              <FontAwesomeIcon
                type="button"
                onClick={() => {
                  this.handleEdit(id, src, title, name, text, imgFile);
                }}
                className="icons"
                icon={faEdit}
              />
              <FontAwesomeIcon
                type="button"
                onClick={() => {
                  this.handleDelete(id, src);
                }}
                className="icons"
                icon={faTrash}
              />
            </div>
          )}
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
        <div className="collapse" id={id}>
          <div className='d-flex mb-3'>
           <img src={src} className="ml-4 ctl-image" alt="..." />
           <div className="card-body">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsGroup;
