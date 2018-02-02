'use strict';

angular.module("Winterest").factory("AuthFactory", function (FBCreds) {

  // this is copied and pasted from Joe's auth example. We can do whatever we want with it but here it is for reference!

  function login(){
    const provider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(provider);
  };

  function logout() {
    return firebase.auth().signOut();
  }

  return {login, logout};
    
});
