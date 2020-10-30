import {
  pushOrSetPostFireDB,
  putImageFireStorage,
  deleteImageFireStorage
} from "../firebase/Firebase.config";

export const emptyState = {
  imgFile: null,
  src: null,
  id: null,
  name: "",
  title: "",
  text: ""
};
export function clearState(setFormState) {
  setFormState(emptyState);
}
export function handleChange(e, setFormState) {
  setFormState({
    [e.target.name]: e.target.value
  });
}
export function newImage(e, setFormState) {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];
  console.log("NEW IMAGE", file);

  reader.onloadend = () => {
    setFormState({ imgFile: file });
  };
  if (typeof file !== "undefined") {
    reader.readAsDataURL(file);
  }
}
export function handleSubmit(e, pageName, state) {
  e.preventDefault();
  console.log("STATE", state);

  if (state === emptyState) return;

  const { src, name, title, text } = state;

  const postObj = {
    src,
    name,
    title,
    text
  };
  // IF NEW POST
  if (state.id === null) {
    // WITHOUT NEW IMAGE
    if (state.imgFile === null) {
      return alert("UPLOAD AN IMAGE");
    }
    putImageFireStorage(pageName, state, postObj);
  }
  // SINCE EDIT POST
  else if (state.imgFile !== null) {
    // IF WITH NEW IMAGE
    if (state.imgFile !== null) {
      deleteImageFireStorage(state.src);
      putImageFireStorage(pageName, state, postObj);
    }
  } else {
    // SINCE WITHOUT NEW IMAGE
    pushOrSetPostFireDB(pageName, state, postObj);
  }
}
