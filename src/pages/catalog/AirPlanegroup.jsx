import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteImageFireStorage, removePostFireDB } from "../../firebase/Firebase.config";
import translate from '../../language/translate';
import { LanguageContext } from "../../context/LanguageContext";


class AirPlaneGroup extends Component {
  static contextType = LanguageContext;
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
  handleDelete(id, src) {
    console.log("POST FIRE DB ID TO DELETE: ", id);

    if (src !== null) {
      console.log("DELETING IMAGE FROM FIRE STORAGE", src);
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    console.log("REMOVING POST FROM FIRE DB");
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("catalog", id);
  }
  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const { id, src, title, name, text, imgFile, auth } = this.props;
    const { expanded } = this.state;
    const { language } = this.context;
    const { ReadMore } = translate[language];
    return (
      <div className="col mb-4">
        <div className="card shadow p-3 mb-5 rounded border-0 airplain_background">
          <div className='container text-center'>
          <img src={src} className="card-img-top rounded ctl-image" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
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
              {ReadMore}
            </button>
            {auth && (
              <div id="flex" className="float-right">
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
          </div>
          <div className="collapse" id={id}>
            <div className="card-body">
              <p className="card-text">{text}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AirPlaneGroup;
