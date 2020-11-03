import React, { Component } from "react";
import {
  pushOrSetPostFireDB,
  putImageFireStorage,
  deleteImageFireStorage
} from "../firebase/Firebase.config";

class AdminForm extends Component {
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = {
      imgFile: null, // "choose file" button populates imgFile
      src: null,
      id: null,
      name: "",
      title: "",
      text: ""
    };

    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newImage = this.newImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  emptyState = {
    imgFile: null,
    src: null,
    id: null,
    name: "",
    title: "",
    text: ""
  };
  componentWillReceiveProps(nextProps) {
    console.log("EDIT OBJ", nextProps.editObj);

    const nextPropsEditObj = nextProps.editObj;

    if (nextPropsEditObj !== null) {
      if (
        nextPropsEditObj.id !== this.state.id ||
        nextPropsEditObj.name !== this.state.name ||
        nextPropsEditObj.title !== this.state.title ||
        nextPropsEditObj.text !== this.state.text ||
        nextPropsEditObj.src !== this.state.src
      ) {
        // merges objToEdit into current state
        // enables admin input form to edit post data
        this.setState(nextPropsEditObj);
      }
    }
  }
  clearState() {
    this.setState(this.emptyState);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  newImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("NEW IMAGE", file);

    reader.onloadend = () => {
      this.setState({ imgFile: file });
    };
    if (typeof file !== "undefined") {
      reader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("STATE", this.state);

    if (this.state === this.emptyState) return;

    const { src, name, title, text } = this.state;
    const { pageName } = this.props;
    const postObj = {
      src,
      name,
      title,
      text
    };
    // IF NEW POST
    if (this.state.id === null) {
      // WITHOUT NEW IMAGE
      if (this.state.imgFile === null) {
        return alert("UPLOAD AN IMAGE");
      }
      console.log("PUTTING NEW IMAGE INTO FIRE STORAGE:", postObj.src);
      putImageFireStorage(pageName, this.state, postObj);
    }
    // SINCE EDIT POST WITH NEW IMAGE
    else if (this.state.imgFile !== null) {
      deleteImageFireStorage(this.state.src);
      console.log("PUTTING NEW IMAGE INTO FIRE STORAGE");
      putImageFireStorage(pageName, this.state, postObj);
    } else {
      // SINCE EDIT POST WITHOUT NEW IMAGE
      console.log("PUTTING EDIT POST NO NEW IMAGE INTO FIRE STORAGE");
      pushOrSetPostFireDB(pageName, this.state, postObj);
    }
  }
  render() {
    const { name, title, text } = this.state;
    const { pageName } = this.props;
    return (
      <div style={{ width: "50%", marginBottom: "50px" }} className="container">
        <form onSubmit={this.handleSubmit} id="form">
          {pageName !== "gallery" && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                name="name"
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
              />
            </div>
          )}
          {pageName !== "catalog" && pageName !== "gallery" && (
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                name="title"
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="title"
                placeholder="title"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <textarea
              value={text}
              name="text"
              rows="3"
              onChange={this.handleChange}
              className="form-control"
              id="text"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">image</label>
            <input
              onChange={this.newImage}
              className="form-control-file"
              type="file"
              name="img"
              id="img"
            />
          </div>
          <div id="flex">
            <input type="submit" className="btn btn-primary" />
            <input
              id="clearBtn"
              type="reset"
              className="btn btn-warning"
              onClick={this.clearState}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AdminForm;
