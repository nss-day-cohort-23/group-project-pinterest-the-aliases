'use strict'; 
angular.module("Winterest").factory("ImgFactory", function (FBUrl, $q, $http) {

  function getAllImages() {
    // returns a promise for all images from the IMAGES collection in firebase
  }

  function postImage() {
    // return a promise to post an image to the IMAGES colletion in firebase
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
    let imageArray = [];
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}pins.json?orderBy="boardId"&equalTo="${boardId}"`)
        .then(({ data }) => { 
          console.log("this is the data", data);
          let pinIds = Object.keys(data);
          console.log(pinIds);
          pinIds.forEach((pinId) => {
            getPinnedImages(pinId.imgId)
            .then(imageObj => {
              imageArray.push(imageObj);
            });
          });
          console.log("this should be an array of image objects", imageArray);
          resolve (imageArray);
        })
        .catch ((error) => {
          console.log("totally didn't work", error);
        });
      });
    // returns a promise that queries firebase for pins that match the given board id
    // this will query the PIN collection 
    // it should return a list of pins
    // loop through the pins and pass each individual pin into the getPinnedImages function
    // this function should resolve image objects 

    // EXAMPLE
    // pins.forEach((pin) => {
    //  getPinnedImages(pin.imgId)
    // .then ((image) =>{
    // push images into an array and resolve an array of images?
    // })
    // })

  }

  function getPinnedImages(imageId) {
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}images/image9.json`)
        .then(({ data }) => {
          console.log("there probably won't be anything here", data);
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

  return { getAllImages, postImage, pinImage, getPinList, getAllBoards, editBoard, deleteBoard, deletePin };

});
