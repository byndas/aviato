import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCEu3WsvqugTOqBDfNmVR8sVp524ylAkhs",
  authDomain: "aviator-db.firebaseapp.com",
  databaseURL: "https://aviator-db.firebaseio.com",
  projectId: "aviator-db",
  storageBucket: "aviator-db.appspot.com",
  messagingSenderId: "904722295928",
  appId: "1:904722295928:web:1bf9154b54557c9f59d18d",
  measurementId: "G-2060N4EPY6"
};

firebase.initializeApp(config);

export const fireAuth = firebase.auth();

export const fireDbRef = firebase.database().ref("base");

const storageRef = imageId =>
  firebase
    .storage()
    .ref()
    .child("images")
    .child(imageId);
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
export const removePostFireDB = (pageName, id) => {
  const removePost = fireDbRef.child(pageName + "/" + id).remove();

  removePost
    .then(() => {
      console.log("REMOVED POST FROM FIRE DB");
      console.log("REMOVED POST FROM REDUX");
    })
    .catch(error => {
      console.log("FAILED TO REMOVE POST FROM FIRE DB:" + error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
export const putImageFireStorage = (pageName, state, postObj) => {
  const randomNumber = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const randomImageId = () => {
    return (
      randomNumber() +
      randomNumber() +
      "-" +
      randomNumber() +
      "-" +
      randomNumber() +
      "-" +
      randomNumber() +
      "-" +
      randomNumber() +
      randomNumber() +
      randomNumber()
    );
  };

  const imageId = randomImageId();

  console.log("imageId", imageId);
  console.log("imgFile", state.imgFile);

  const putImage = storageRef(imageId).put(state.imgFile);

  putImage.on("state_changed", snapshot => {
    // logs image upload % status
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("IMAGE UPLOAD %", progress);
  });

  putImage
    .then(snapshot => {
      console.log("IMAGE SNAPSHOT IN FIRE STORAGE", snapshot);

      const imagePath = snapshot.metadata.fullPath.split("/")[1];
      console.log("IMAGE PATH:", imagePath);

      const fireStorageUrl =
        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
        imagePath +
        "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";

      postObj.src = fireStorageUrl;

      console.log("PUSHING NEW POST OBJ INTO FIRE DB", postObj);
      pushOrSetPostFireDB(pageName, state, postObj);
    })
    .catch(error => {
      console.log("IMAGE STORAGE FAILED", error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
export const deleteImageFireStorage = src => {
  console.log("999999 SRC", src);

  const after2F = src.split("%2F")[1];

  const imageId = after2F.split("?")[0];

  const deleteImage = storageRef(imageId).delete();

  deleteImage
    .then(() => {
      console.log("IMAGE DELETED FROM FIRE STORAGE", imageId);
    })
    .catch(error => {
      console.log("FAILED TO DELETE IMAGE FROM FIRE STORAGE", error.message);
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
export const pushOrSetPostFireDB = (pageName, state, postObj) => {
  console.log("POST OBJ, STATE", postObj, state);

  const pageFireDbRef = fireDbRef.child(pageName);

  let pushOrSet;
  const postId = state.id;

  // IF EDIT POST
  if (postId !== null) {
    pushOrSet = pageFireDbRef.child(postId).set(postObj);
    console.log("UPDATED POST IN FIRE DB", postObj);
  } else {
    // SINCE CREATING A POST
    pushOrSet = pageFireDbRef.push(postObj);
    console.log("CREATED POST IN FIRE DB", postObj);
  }

  pushOrSet
    .then(() => {
      console.log("POST OBJ", postObj);
      document.getElementById("clearBtn").click();
      console.log("STATE & FORM CLEARED");
    })
    .catch(err => {
      // Firebase DB fails to save post
      console.log("FAILED TO UPDATE POST IN FIRE DB", err.message);

      if (state.src !== null) {
        console.log(
          "DELETING IMAGE FROM FIRE STORAGE DUE TO FAILED DB POST",
          state.src
        );
        deleteImageFireStorage(state.src);
      }
    });
};
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
export const getFireDbPage = (pageName, dispatchAction) => {
  // LISTENER: UPDATES REDUX when Fire DB page changes

  fireDbRef.child(pageName).on("value", snapshot => {
    console.log("FIRE DB PAGE SNAPSHOT:", snapshot.val());
    dispatchAction(snapshot.val());
  });
};
