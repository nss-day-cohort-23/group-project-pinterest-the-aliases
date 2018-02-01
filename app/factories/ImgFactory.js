'use strict'; 
angular.module('');

function getAllImages(){
  // returns a promise for all images from the IMAGES collection in firebase
}

function postImage(){
  // return a promise to post an image to the IMAGES colletion in firebase
}

function getAllBoards(uid){
  // returns a promise that queries firebase for boards that match the given user id
}

function getBoard(boardId){
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
function getPinnedImages(imgId){
  // returns a promise that queries the IMAGES collection for images that match the given image id
}

function deleteBoard (boardId){
  // delete board from board collection
  // delete associated pins
  // maybe: use a query to get all pins with the matching board id
  // pass each of those pins into a delete function
}

function deletePin(id){
  // accepts a firebase id
  // returns a promise that deletes the given pin
}



return {getAllImages, postImage, getAllBoards, getBoard, deleteBoard, deletePin};