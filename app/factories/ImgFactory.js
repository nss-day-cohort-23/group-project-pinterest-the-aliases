'use strict'; 
angular.module("Winterest").factory("ImgFactory", function (FBUrl, $http, $q) {

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
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
        .then(data => {
          console.log("data", data);
          resolve(data);
        })
        .catch(error => {
          console.log("error", error);
          reject(error);
        });
    });
  }

  function getBoard(boardId) {
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


  // this function will not be exported- it's internal and will be called in the getBoard function
  function getPinnedImages(imgId) {
    // returns a promise that queries the IMAGES collection for images that match the given image id
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

  return { getAllImages, postImage, pinImage, addBoard, getAllBoards, getBoard, editBoard, deleteBoard, deletePin };

});
