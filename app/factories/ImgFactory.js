'use strict'; 
angular.module("Winterest").factory("ImgFactory", function (FBUrl, $q, $http) {

  function getAllImages() {
    // returns a promise for all images from the IMAGES collection in firebase
    return $q((resolve,reject) => {
      $http.get(`${FBUrl}/images.json`)
      .then(({ data }) => {
        resolve(Object.values(data));
      });
    });
  }

  function post(item) {
    // return a promise to post an image to the IMAGES colletion in firebase
      return $q((resolve, reject) => {
        $http
          .post(`${FBUrl}/images.json`, JSON.stringify(item))
          .then(data => {
            console.log("New Image posted");
            resolve(data);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }

  function pinImage(pinObject) {
    // returns a promise that posts the given pin object to the PINS collection in firebase
    // pin objects will have a board id and an img id
  }

  function addBoard(boardObject){
    // posts board object to BOARDS collection in firebaes
  }

  function getAllBoards(uid) {
    // returns a promise that queries firebase for boards that match the given user id
  }

  function getPinList(boardId) {
    let imageArray = []; // empty arr to store image objects
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}pins.json?orderBy="boardId"&equalTo="${boardId}"`)
        .then(({ data }) => { 
          for (let pin in data){
            console.log(data[pin].imgId);
            getPinnedImages(data[pin].imgId)
              .then(imageObj => {
                imageArray.push(imageObj);
              });
            }
          resolve (imageArray);
        })
        .catch ((error) => {
          console.log("totally didn't work", error);
        });
      });
  }

  // this is an internal function called within get pin list
  function getPinnedImages(imageId) {
    console.log("this should be image 0", imageId);
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}images/${imageId}.json`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          console.log("totally didn't work", error);
        });
    });
  }

 

  function editBoard (boardId, editObject){
    // sends updated object to firebase with a put 
  }

  function deleteBoard(boardId) {
    // delete board from board collection
    // delete associated pins
    // maybe: use a query to get all pins with the matching board id
    // pass each of those pins into a delete function
  }

  function deletePin(id) {
    // accepts a firebase id
    // returns a promise that deletes the given pin
  }

  // this will be an internal function to convert whatever objecty things we get back from firebase and resolve it as an array
  function convertToArray() {
    // converts an object of objects to an array of objects
  }

  return { getAllImages, post, pinImage, addBoard, getAllBoards, getPinList, editBoard, deleteBoard, deletePin };

});
