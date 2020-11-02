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
    return (
      <div className="container border mb-3">
        <h5 className='text-center p-3 text-uppercase'>{name}</h5>
        <div className='container'>
        {auth && (<div className="float-right">
              <FontAwesomeIcon type="button" onClick={() => {
                  this.handleEdit(id, src, title, name, text, imgFile);
                }}
                icon={faEdit}
              />
              <FontAwesomeIcon type="button" onClick={() => {this.handleDelete(id, src)}}
                icon={faTrash}
              />
            </div> )}
           <img src={src} className="nws-image rounded img-thumbnail" alt={name} />
             <h5 className="text-center p-3">{title}</h5>
           <p className="text-center news-text">{text}</p>
        </div>
      </div>
    );
  }
}

export default NewsGroup;


