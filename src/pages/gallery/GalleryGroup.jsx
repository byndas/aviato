import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteImageFireStorage,
  removePostFireDB
} from "../../firebase/Firebase.config";

class GalleryGroup extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(id, src, title, name, text) {
    // scrolls up to NewsForm
    window.scrollTo(0, 0);
    // populates sibling NewsForm.jsx state (via parent component)
    // with data (including ID) of admin update post
    const editObj = {
      id,
      src,
      name,
      title,
      text
    };
    console.log("GalleryGroup editObj", editObj);
    this.props.editPostInputs(editObj);
  }
  handleDelete(id, src) {
    console.log("POST ID TO DELETE IN FIRE DB: ", id);

    if (src !== null) {
      console.log("DELETING IMAGE FROM FIRE STORAGE", src);
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    console.log("REMOVING POST FROM FIRE DB");
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("gallery", id);
  }
  render() {
    const { src, text, imgFile, auth, id } = this.props;
    // HOW TO FINISH THIS?
    return (
      <>
      <div className="carousel-item mt-5 mb-5 rounded">
        <img src={src} className="gallery_img" alt="..." />
          <div id="flex" className="carousel-caption">
           <p className="gallery_text font-italic text-center">
             {text}
             {auth && <div>
           <FontAwesomeIcon style={{color: 'blue'}} type="button"  onClick={() => {this.handleEdit(id, src, text, imgFile)}}
              className="icons"
              icon={faEdit}
            />
            <FontAwesomeIcon style={{color: 'blue'}} type="button" onClick={() => {this.handleDelete(id, src) }}
              className="icons"
              icon={faTrash}
            />
          </div>}
             </p>
          </div>
      </div>
      </>
    );
  }
}

export default GalleryGroup;
