"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    welcomeWord();

    let profileButton = findElementById("profileButton");
    profileButton.addEventListener("click", profileButtonClick);
  }

  function welcomeWord() {
    alert("Welcome to Vivian's profile :)")
  }

  function profileButtonClick() {
    console.log("click on the button")
    findElementById("profileButton").innerHTML = "<a href=\"videochannel.html\">Video Channel</a>"

  }

  function findElementById(idName) {
    return document.getElementById(idName);
  }

  function generateElement(tagName) {
    return document.createElement(tagName);
  }
})();


